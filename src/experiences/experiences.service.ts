import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExperienceDto, UpdateExperienceDto } from './dto/experience.dto';

@Injectable()
export class ExperiencesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.experience.findMany({
      orderBy: { sortOrder: 'desc' },
    });
  }

  async findOne(id: number) {
    const experience = await this.prisma.experience.findUnique({
      where: { id },
    });

    if (!experience) {
      throw new NotFoundException(`Experience with ID "${id}" not found`);
    }

    return experience;
  }

  async create(createExperienceDto: CreateExperienceDto) {
    // Get the max sortOrder to set a default if not provided
    const maxSortOrder = await this.prisma.experience.findFirst({
      orderBy: { sortOrder: 'desc' },
      select: { sortOrder: true },
    });

    const sortOrder = createExperienceDto.sortOrder ?? (maxSortOrder?.sortOrder ?? 0) + 1;

    return this.prisma.experience.create({
      data: {
        company: createExperienceDto.company,
        role: createExperienceDto.role,
        location: createExperienceDto.location,
        startDate: new Date(createExperienceDto.startDate),
        endDate: createExperienceDto.endDate ? new Date(createExperienceDto.endDate) : null,
        isCurrent: createExperienceDto.isCurrent ?? false,
        description: createExperienceDto.description,
        achievements: createExperienceDto.achievements,
        responsibilities: createExperienceDto.responsibilities,
        technologies: createExperienceDto.technologies,
        highlights: createExperienceDto.highlights,
        sortOrder,
      },
    });
  }

  async update(id: number, updateExperienceDto: UpdateExperienceDto) {
    const updateData: any = { ...updateExperienceDto };
    
    // Convert date strings to Date objects if provided
    if (updateData.startDate) {
      updateData.startDate = new Date(updateData.startDate);
    }
    if (updateData.endDate !== undefined) {
      updateData.endDate = updateData.endDate ? new Date(updateData.endDate) : null;
    }

    return this.prisma.experience.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    return this.prisma.experience.delete({
      where: { id },
    });
  }
}
