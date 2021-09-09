import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteCoursesService } from '../aplication/delete.courses';
import { GetCoursesService } from '../aplication/get.courses';
import { PostCoursesService } from '../aplication/post.courses';
import { PutCoursesService } from '../aplication/put.courses';
import { DeleteCoursesController } from './controllers/delete.controller';
import { GetCoursesController } from './controllers/get.controller';
import { PostCoursesController } from './controllers/post.controller';
import { PutCoursesController } from './controllers/put.controller';
import { MysqlDeleteRepository } from './persistent/mysql.delete.repository';
import { MysqlGetRepository } from './persistent/mysql.get.repository';
import { MysqlPostRepository } from './persistent/mysql.post.repository';
import { MysqlPutRepository } from './persistent/mysql.put.repository';

const controllers = [
  GetCoursesController,
  PostCoursesController,
  PutCoursesController,
  DeleteCoursesController,
];

const services = [
  GetCoursesService,
  PostCoursesService,
  PutCoursesService,
  DeleteCoursesService,
];

const repositories = [
  MysqlGetRepository,
  MysqlPostRepository,
  MysqlPutRepository,
  MysqlDeleteRepository,
];

@Module({
  imports: [TypeOrmModule.forFeature([...repositories])],
  controllers: [...controllers],
  providers: [...services],
})
export class CoursesModule {}
