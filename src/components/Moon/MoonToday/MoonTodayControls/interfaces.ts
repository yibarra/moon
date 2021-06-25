import { ISize } from "../../../../providers/MainProvider/interfaces";
import { IColors } from "../../../../providers/ThemeProvider/interfaces";

export interface IMoonTodayControls {
  setYear(value: Date): void;
  size: ISize;
  theme: IColors;
  x: number;
  y: number;
  year: number;
}