import { ISize } from "../../../providers/MainProvider/interfaces";
import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMoonToday {
  size: ISize;
  theme: IColors;
  radius: number;
  setToday(value: Date): void;
  today: Date;
}