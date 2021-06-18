import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMoonPhase {
  bg?: boolean;
  day: number;
  dashed: number[];
  month: number;
  size: number;
  strokeWidth: number;
  theme: IColors;
  x: number;
  y: number;
  year: number;
}