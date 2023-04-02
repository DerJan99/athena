export enum Competitions {
  'Sprint' = 'SPRINT',
  'LongJump' = 'LONG_JUMP',
  'Swimming' = 'SWIMMING',
  'JumpRiding' = 'JUMP_RIDING',
  'Fencing' = 'FENCING',
}

export interface Athlete {
  name: string;
  lastName: string;
  id?: number;
  birthday?: Date;
  bio?: string;
  stats?: Stats;
}

interface Stats {
  gold: number;
  silver: number;
  bronze: number;
  dsq: number;
}

export interface Sprinter extends Athlete {
  competitions?: Competitions.Sprint;
  time: number,
  disqualified: string;
}

export interface LongJumper extends Athlete {
  competitions?: Competitions.LongJump;
  firstrun: number;
  secondrun: number;
  thirdrun: number;
  disqualifiedruns: number;
}

export interface Swimmer extends Athlete {
  competitions?: Competitions.Swimming;
  time: number;
  disqualified: string;
}

export interface JumpRider extends Athlete {
  competitions?: Competitions.JumpRiding;
  time: number;
  penaltyPoints: number;
  disqualified: string;
}

export interface Fencer extends Athlete {
  competitions?: Competitions.Fencing;
  match?: number;
  round?: number;
  score?: string;
}
