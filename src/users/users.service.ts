import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 77, name: 'PHolo Okeke', age: 23, Nationality: 'Nigerian' },
    { id: 23, name: 'Kenechukwu josiah', age: 22, Nationality: 'Nigerian' },
  ];

  findAll(name?: string): User[] {
    if (name) return this.users.filter((user) => user.name === name);
    return this.users;
  }

  findUser(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
