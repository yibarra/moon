import { IColors } from "../../../../../providers/ThemeProvider/interfaces";
import { ILang } from "../../../../../providers/LangProvider/interfaces";

export interface IMoonTodayInfoYear {
  lang: ILang;
  theme: IColors;
  today: Date;
  x: number;
  y: number;
}