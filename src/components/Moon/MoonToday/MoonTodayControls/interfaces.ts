import { IColors } from "../../../../providers/ThemeProvider/interfaces";
import { ILang } from "../../../../providers/LangProvider/interfaces";

export interface IMoonTodayControls {
  lang: ILang;
  setYear(value: Date): void;
  theme: IColors;
  x: number;
  y: number;
  year: number;
}