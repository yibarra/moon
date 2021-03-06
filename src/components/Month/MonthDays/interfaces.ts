import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMonthDays {
  angle: number;
  currentMonth: boolean;
  day: number;
  month: number;
  lastDay: number;
  radius: number;
  setToday(value: Date): void;
  theme: IColors;
  today: Date;
}