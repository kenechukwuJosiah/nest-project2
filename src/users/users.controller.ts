import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ required: false, name: 'name' })
  @Get('getusers')
  getUsers(@Query('name') name: string): User[] {
    return this.userService.findAll(name);
  }

  @ApiOkResponse({ type: User, description: 'The user is here' })
  @ApiNotFoundResponse()
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.findUser(id);

    if (!user) throw new NotFoundException();

    return user;
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post('createuser')
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }
}
