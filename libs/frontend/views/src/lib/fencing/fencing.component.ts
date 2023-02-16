import { Component, OnInit } from '@angular/core';
import { NgttTournament } from 'ng-tournament-tree';

@Component({
  selector: 'athena-fencing',
  templateUrl: './fencing.component.html',
  styleUrls: ['./fencing.component.scss'],
})
export class FencingComponent implements OnInit {
  constructor() {}

  public fencingTournament: NgttTournament;
  ngOnInit(): void {
    this.fencingTournament = {
      rounds: [
        {
          type: 'Winnerbracket',
          matches: [
            {
              teams: [
                { name: 'Team  A', score: 1 },
                { name: 'Team  B', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  C', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  E', score: 1 },
                { name: 'Team  F', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  G', score: 1 },
                { name: 'Team  H', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  A', score: 1 },
                { name: 'Team  B', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  C', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  E', score: 1 },
                { name: 'Team  F', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  G', score: 1 },
                { name: 'Team  H', score: 2 },
              ],
            },
          ],
        },
        {
          type: 'Winnerbracket',
          matches: [
            {
              teams: [
                { name: 'Team  A', score: 1 },
                { name: 'Team  B', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  C', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  E', score: 1 },
                { name: 'Team  F', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  G', score: 1 },
                { name: 'Team  H', score: 2 },
              ],
            },
          ],
        },
        {
          type: 'Winnerbracket',
          matches: [
            {
              teams: [
                { name: 'Team  B', score: 1 },
                { name: 'Team  D', score: 2 },
              ],
            },
            {
              teams: [
                { name: 'Team  F', score: 1 },
                { name: 'Team  H', score: 2 },
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
                  name: 'Team  D',
                  score: 1,
                },
                {
                  name: 'Team  H',
                  score: 2,
                },
              ],
            },
            {
              teams: [
                {
                  name: 'Team  F',
                  score: 1,
                },
                {
                  name: 'Team  B',
                  score: 2,
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
// export interface NgttTournament {
//   rounds: NgttRound[];
// }

// export interface NgttRound {
//   /**
//    * The type determines in which branch to place a match.
//    * SingleElimination-Trees only consist of a Winnerbracket and a Final-Bracket
//    */
//   type: 'Winnerbracket' | 'Loserbracket' | 'Final';
//   matches: any[];
// }
