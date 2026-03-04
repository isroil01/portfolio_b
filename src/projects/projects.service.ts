import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(slug: string) {
    const project = await this.prisma.project.findUnique({
      where: { slug },
    });

    if (!project) {
      throw new NotFoundException(`Project with slug "${slug}" not found`);
    }

    return project;
  }

  async create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: createProjectDto,
    });
  }

  async update(slug: string, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { slug },
      data: updateProjectDto,
    });
  }

  async remove(slug: string) {
    return this.prisma.project.delete({
      where: { slug },
    });
  }
}
