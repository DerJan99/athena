import { Controller, Get } from '@nestjs/common';
import { NgttTournament } from 'ng-tournament-tree';

import { AthleteService } from './athlete.service';

@Controller('api/athlete')
export class AthleteController {
  constructor(private athleteService: AthleteService) {}
  @Get('/fencingTournament')
  getFencingTournament(): NgttTournament {
    return this.athleteService.fencingTournament;
  }
}
