import { ILang } from "../../../../../providers/LangProvider/interfaces";
import { IColors } from "../../../../../providers/ThemeProvider/interfaces";

export interface IMoonTodayInfoLabel {
  lang: ILang;
  offSetY: number;
  label: string;
  theme: IColors;
  value: any;
  x: number;
  y: number;
}