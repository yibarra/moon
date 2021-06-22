import { ISize } from "../../../../providers/MainProvider/interfaces";
import { IColors } from "../../../../providers/ThemeProvider/interfaces";

export interface IMoonTodayBackground {
  radius: number;
  theme: IColors;
  size: ISize;
}