/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fencer } from '@athena/shared/data-model';
import { NgttTournament } from 'ng-tournament-tree';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { environment } from './environment';

@Injectable()
export class AthleteService {
  host = environment.athenaHost;
  apiAthlete = this.host + 'api/athlete';
  allFencer = new BehaviorSubject<Fencer[]>(null);
  loaded = false;
  public fencingTournament: NgttTournament;
  constructor(private httpClient: HttpClient) {
    this.getAllFencer().subscribe((fencer) => {
      this.allFencer.next(fencer);
    });
  }

  getFencingTournament() {
    return this.httpClient.get(this.apiAthlete + '/fencingTournament');
  }

  getAllFencer(): Observable<Fencer[]> {
    return this.httpClient.get(this.apiAthlete + '/allFencer').pipe(
      map((fencer) => {
        return fencer as Fencer[];
      })
    );
  }

  saveNewRound(fencer: Fencer) {
    return this.httpClient.post(this.apiAthlete + '/saveNewRound', fencer);
  }

  async fillFencingTournament() {
    await this.getFencingTournament().subscribe((fencTour) => {
      this.fencingTournament = fencTour as NgttTournament;
      this.loaded = true;
    });
  }
}
