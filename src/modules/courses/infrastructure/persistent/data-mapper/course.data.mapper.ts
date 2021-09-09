import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('courses')
export class CourseDataMapper {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  category: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  link: string;

  @Column('varchar')
  teachers: string;
}
