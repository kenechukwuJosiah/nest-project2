import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsAlphanumeric()
  @MaxLength(10)
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  Nationality: string;
}
