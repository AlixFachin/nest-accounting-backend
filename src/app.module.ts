import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { EntriesModule } from './entries/entries.module';

@Module({
  imports: [UsersModule, AccountsModule, EntriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
