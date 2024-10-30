import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('employees')
export class EmployeeEntity {
  @PrimaryColumn()
  empID: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
