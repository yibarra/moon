import { IColors } from "../../../../providers/ThemeProvider/interfaces";

export interface IMoonTodayBackground {
  radius: number;
  theme: IColors;
  setPos(value: any): void;
  x: number;
  y: number;
}