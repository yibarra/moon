import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMonthName {
  active: boolean;
  angle: number;
  day: number;
  month: number;
  radius: number;
  theme: IColors;
  text: string;
  x: number;
  y: number;
}