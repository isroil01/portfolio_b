import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ProjectsModule } from './projects/projects.module';
import { PostsModule } from './posts/posts.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HealthModule,
    ProjectsModule,
    PostsModule,
    ExperiencesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
