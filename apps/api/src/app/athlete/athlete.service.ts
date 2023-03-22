/* eslint-disable @typescript-eslint/no-var-requires */
import { Fencer } from '@athena/shared/data-model';

import { FENCINGATHLETES } from './mockAthlete.list';

/* eslint-disable @typescript-eslint/no-empty-function */
export class AthleteService {
  fencingTournament: any = {
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
        ],
      },
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
        ],
      },
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
          {
            teams: [
              { name: 'ausstehend', score: 0 },
              { name: 'ausstehend', score: 0 },
            ],
          },
        ],
      },
      {
        type: 'Final',
        matches: [
          {
            teams: [
              {
                name: 'ausstehend',
                score: 0,
              },
              {
                name: 'ausstehend',
                score: 0,
              },
            ],
          },
          {
            teams: [
              {
                name: 'ausstehend',
                score: 0,
              },
              {
                name: 'ausstehend',
                score: 0,
              },
            ],
          },
        ],
      },
    ],
  };

  allFencer: Fencer[] = FENCINGATHLETES;
  calculateTournament() {
    const fencingList = FENCINGATHLETES;
    for (let i = 0; i < 8; i++) {
      const activeMatch = this.fencingTournament.rounds[0].matches[i];
      let k = i;
      if (i == 0) {
        k = i;
      } else {
        k = 2 * i;
      }

      activeMatch.teams[0] = {
        name: fencingList[k].name + ' ' + fencingList[k].lastName,
        score: 0,
      };
      activeMatch.teams[1] = {
        name: fencingList[k + 1].name + ' ' + fencingList[k + 1].lastName,
        score: 0,
      };
      console.log(this.fencingTournament.rounds[0].matches[i]);
      console.log('match end');
    }
  }

  setWinner(fencer: Fencer) {
    console.log(fencer);
    this.fencingTournament.rounds[fencer.round].matches[fencer.match].teams[0] =
      fencer.name + '' + fencer.lastName;
    return true;
  }

  saveAllFencer(fencer: Fencer) {
    this.allFencer.push(fencer);
  }
}
