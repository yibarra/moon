import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMoonPhase {
  angle?: number;
  active?: boolean;
  day: number;
  delay?: number;
  month: number;
  size: number;
  strokeWidth: number;
  theme: IColors;
  x: number;
  y: number;
  year: number;
}