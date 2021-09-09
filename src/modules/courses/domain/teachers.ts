import ITeachers from './contracts/teachers';

export default class Teachers implements ITeachers {
  teachers: string;

  constructor(teachers: string) {
    this.teachers = teachers;
  }
}
