import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstate.entitie";
import { User } from "./users.entitie";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}

export { Schedule };
