export type CalendarDay = {
  dayMonth: number;
  dayWeek: string;
  monthNumber: number;
  monthString: string;
  year: number;
  color: string;
  celebrationType?: string;
  celebrationTitle?: string;
  readings: string;
};

export type CalendarResponse = {
  date: string;
  season: string;
  season_week: string;
  weekday: string;
  celebrations: CelebrationResponse[];
};

export type CelebrationResponse = {
  title: string;
  colour: string;
  rank: string;
  rank_num: number;
};
