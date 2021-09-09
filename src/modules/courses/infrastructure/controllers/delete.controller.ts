import { Delete, Controller, Param, HttpException } from '@nestjs/common';
import { DeleteCoursesService } from '../../aplication/delete.courses';

@Controller('course')
export class DeleteCoursesController {
  constructor(private deleteCoursesService: DeleteCoursesService) {}

  @Delete(':id')
  async createCourse(@Param('id') id: string): Promise<void> {
    const response = await this.deleteCoursesService.delete(id);

    if (response instanceof HttpException) {
      throw response;
    }
  }
}
