import { IColors } from "../../../../providers/ThemeProvider/interfaces";

export interface IMoonTodayInfo {
  today: Date;
  theme: IColors;
  x: number;
  y: number;
}