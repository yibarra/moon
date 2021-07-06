import { IColors } from "../../../../providers/ThemeProvider/interfaces";

export interface ICalendarDaysItem {
  active: boolean;
  glyphs: string[];
  theme: IColors;
  x: number;
  y: number;
}