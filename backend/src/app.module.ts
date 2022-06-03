import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SparePartsModule } from './spare-parts/spare-parts.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://alexgeolog:Moscow2019@cluster0.ch7uk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
      SparePartsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
