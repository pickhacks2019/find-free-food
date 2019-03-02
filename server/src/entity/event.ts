import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    length: 50
  })
  public name: string;

  @Column({
    length: 255,
    nullable: true
  })
  public description: string;

  @Column({ nullable: true })
  public healthRating: number;

  @CreateDateColumn()
  public time: Date;

  @Column()
  public latitude: number;

  @Column()
  public longitude: number;

  @Column({ nullable: true })
  public building: string;

  @Column({ nullable: true })
  public roomNumber: string;
}
