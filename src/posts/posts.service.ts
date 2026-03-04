import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findAllAdmin() {
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(slug: string) {
    const post = await this.prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      throw new NotFoundException(`Post with slug "${slug}" not found`);
    }

    if (post.status !== 'PUBLISHED') {
      throw new NotFoundException(`Post with slug "${slug}" not found`);
    }

    return post;
  }

  async findOneAdmin(slug: string) {
    const post = await this.prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      throw new NotFoundException(`Post with slug "${slug}" not found`);
    }

    return post;
  }

  async create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        ...createPostDto,
        publishedAt: createPostDto.status === 'PUBLISHED' ? new Date() : null,
      },
    });
  }

  async update(slug: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { slug },
      data: {
        ...updatePostDto,
        publishedAt: updatePostDto.status === 'PUBLISHED' ? new Date() : undefined,
      },
    });
  }

  async remove(slug: string) {
    return this.prisma.post.delete({
      where: { slug },
    });
  }
}
