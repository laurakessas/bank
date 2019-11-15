import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DepositModule } from './deposit/deposit.module';

@Module({
  imports: [AuthModule, UsersModule, DepositModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
