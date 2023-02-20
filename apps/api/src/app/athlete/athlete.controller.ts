/* eslint-disable @typescript-eslint/no-var-requires */
import { Controller, Get } from '@nestjs/common';

import { AthleteService } from './athlete.service';

@Controller('/athlete')
export class AthleteController {
  constructor(private athleteService: AthleteService) {}
  @Get('/fencingTournament')
  getFencingTournament(): any {
    return this.athleteService.fencingTournament;
  }
}
