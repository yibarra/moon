import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMonthContainer {
  angle: number;
  currentMonth: boolean;
  day: number;
  month: number;
  radius: number;
  setToday(value: Date): void;
  theme: IColors;
  today: Date;
}