import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  // @Field(() => String, { description: 'nama depan user' })
  // firstName: string;

  // @Field(() => String, { description: 'nama belakang user' })
  // lastName: string;

  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  username: string;

  @Field(() => String, { description: 'email user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => Int, { description: 'nomor hp user' })
  nohp: number;

  @Field(() => String, { description: 'password user' })
  @IsNotEmpty()
  password: string;
}
