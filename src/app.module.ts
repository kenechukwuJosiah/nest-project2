import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [UsersModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
