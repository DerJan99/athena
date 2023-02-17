/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgttTournament } from 'ng-tournament-tree';
import { BehaviorSubject, map } from 'rxjs';

import { environment } from './environment';

@Injectable()
export class AthleteService {
  host = environment.athenaHost;
  apiFencing = this.host + 'api/athlete/fencingTournament';
  currentFencingTournament = new BehaviorSubject<NgttTournament>(null);
  constructor(private httpClient: HttpClient) {
    this.getFencingTournament().subscribe((fencTour) => {
      this.currentFencingTournament.next(fencTour);
      console.log(fencTour);
    });
  }

  getFencingTournament() {
    return this.httpClient
      .get(this.apiFencing)
      .pipe(map((fencTour) => fencTour as NgttTournament));
  }
}
