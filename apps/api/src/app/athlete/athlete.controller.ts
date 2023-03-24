/* eslint-disable @typescript-eslint/no-var-requires */
import { Fencer } from '@athena/shared/data-model';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { AthleteService } from './athlete.service';

@Controller('/athlete')
export class AthleteController {
  constructor(private athleteService: AthleteService) {}
  @Post('/saveNewRound')
  saveNewRound(@Body() fencer: Fencer) {
    const savedFencer = this.athleteService.setWinner(fencer);
    this.athleteService.saveAllFencer(fencer);
    return savedFencer;
  }

  @Get('/fencingTournament')
  getFencingTournament(): any {
    this.athleteService.calculateTournament();
    return this.athleteService.fencingTournament;
  }

  @Get('/achtelFinale')
  getAchtelfinale() {
    return this.athleteService.achtelFinale;
  }
  @Get('/viertelFinale')
  getViertelfinale() {
    return this.athleteService.viertelFinale;
  }
  @Get('/halbFinale')
  getHalbfinale() {
    return this.athleteService.halbFinale;
  }
  @Get('/finale')
  getFinale() {
    return this.athleteService.finale;
  }
}
