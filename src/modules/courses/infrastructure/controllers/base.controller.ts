import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseDataMapper } from '../persistent/data-mapper/course.data.mapper';

export default class BaseController {
  constructor(
    @InjectRepository(CourseDataMapper)
    private CourseRepository: Repository<CourseDataMapper>,
  ) {}
}
