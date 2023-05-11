import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RealEstate } from "./realEstate.entitie";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
  @JoinColumn()
  realEstate: RealEstate[];
}

export { Category };
