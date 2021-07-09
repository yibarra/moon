import { ILang } from "../../../providers/LangProvider/interfaces";
import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface ICalendarDays {
  animate: boolean;
  angle: number;
  day: number;
  lang: ILang;
  radius: number;
  rotate: number;
  theme: IColors;
  x: number;
  y: number;
}