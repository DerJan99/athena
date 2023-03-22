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
}

export interface LongJumper extends Athlete {
  competitions?: Competitions.LongJump;
}

export interface Swimmer extends Athlete {
  competitions?: Competitions.Swimming;
}

export interface JumpRider extends Athlete {
  competitions?: Competitions.JumpRiding;
}

export interface Fencer extends Athlete {
  competitions?: Competitions.Fencing;
  match?: number;
  round?: number;
  score?: number;
}
