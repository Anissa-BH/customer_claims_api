import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Claim } from '../claims/claim.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @OneToMany(() => Claim, claim => claim.customer)
  claims: Claim[];
}
