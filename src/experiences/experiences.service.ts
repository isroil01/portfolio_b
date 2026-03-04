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
    return this.prisma.experience.create({
      data: createExperienceDto,
    });
  }

  async update(id: number, updateExperienceDto: UpdateExperienceDto) {
    return this.prisma.experience.update({
      where: { id },
      data: updateExperienceDto,
    });
  }

  async remove(id: number) {
    return this.prisma.experience.delete({
      where: { id },
    });
  }
}
