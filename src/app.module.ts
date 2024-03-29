import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './modules/courses/infrastructure/courses.module';
import { CourseDataMapper } from './modules/courses/infrastructure/persistent/data-mapper/course.data.mapper';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'test',
      username: 'root',
      entities: [CourseDataMapper],
      synchronize: true,
      logging: true,
    }),
    CoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
