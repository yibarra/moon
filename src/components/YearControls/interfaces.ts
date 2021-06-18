import { IColors } from "../../providers/ThemeProvider/interfaces";

export interface IYearControls {
  radius: number;
  theme: IColors;
  year: number;
  setYear(value: Date): void;
}