import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMonthPercent {
  angle: number;
  active: boolean;
  currentMonth: boolean;
  day: any;
  month: number;
  radius: number;
  theme: IColors;
  today: Date;
}