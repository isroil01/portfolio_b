import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://user:password@localhost:5432/portfolio?schema=public';

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting seed...');

  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'isroiljon@glinkify.com' },
  });

  if (existingAdmin) {
    console.log('Admin user already exists, skipping...');
    return;
  }

  // Hash password
  const passwordHash = await bcrypt.hash('1q2w3e4r5!', 10);

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      email: 'isroiljon@glinkify.com',
      passwordHash,
      role: 'ADMIN',
    },
  });

  console.log('Admin user created:', {
    id: admin.id,
    email: admin.email,
    role: admin.role,
  });

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
