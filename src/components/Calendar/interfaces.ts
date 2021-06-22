import { ISize } from "../../providers/MainProvider/interfaces";
import { IColors } from "../../providers/ThemeProvider/interfaces";

export interface ICalendar {
  radius: number;
  setToday(value: Date): void;
  theme: IColors;
  today: Date;
  size: ISize;
}