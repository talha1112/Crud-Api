import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb://localhost:27017/userdb'), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
