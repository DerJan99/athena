import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthleteController } from './athlete/athlete.controller';
import { AthleteService } from './athlete/athlete.service';

@Module({
  imports: [],
  controllers: [AppController, AthleteController],
  providers: [AppService, AthleteService],
})
export class AppModule {}
