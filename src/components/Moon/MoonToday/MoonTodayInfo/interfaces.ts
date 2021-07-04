import { IColors } from "../../../../providers/ThemeProvider/interfaces";
import { ILang } from "../../../../providers/LangProvider/interfaces";

export interface IMoonTodayInfo {
  lang: ILang;
  today: Date;
  theme: IColors;
  x: number;
  y: number;
}