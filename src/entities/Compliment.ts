import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";

@Entity("compliments")
class compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_receiver: string;

  @Column()
  tag_id: string;

  @JoinColumn({ name: "tag_id" })
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { compliment };
