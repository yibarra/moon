import { ISize } from "../../../providers/MainProvider/interfaces";
import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMoonToday {
  size: ISize;
  theme: IColors;
  setToday(value: Date): void;
  today: Date;
}