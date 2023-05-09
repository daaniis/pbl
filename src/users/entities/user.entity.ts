import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'register' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  @IsNotEmpty()
  userId: number;

  @Column()
  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  username: string;

  @Column()
  @Field(() => String, { description: 'email user' })
  email: string;

  @Column()
  @Field(() => Int, { description: 'nomor hp user' })
  @IsNotEmpty()
  nohp: number;

  @Column()
  @Field(() => String, { description: 'password user' })
  @IsNotEmpty()
  password: string;
}
