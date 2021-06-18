import { IColors } from "../../../providers/ThemeProvider/interfaces";
import { ISize } from "../../../providers/MainProvider/interfaces";

export interface IMoonTodayControls {
  setYear(value: Date): void;
  size: ISize;
  theme: IColors;
  year: number;
}