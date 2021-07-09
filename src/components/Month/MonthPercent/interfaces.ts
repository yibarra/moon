import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMonthPercent {
  animate: boolean;
  angle: number;
  active: boolean;
  currentMonth: boolean;
  day: any;
  month: number;
  radius: number;
  theme: IColors;
  today: Date;
}