import { IColors } from "../../../../providers/ThemeProvider/interfaces";

export interface ICalendarDaysItem {
  active: boolean;
  angle: number;
  day: number;
  glyphs: string[];
  rotate: number;
  theme: IColors;
  x: number;
  y: number;
}