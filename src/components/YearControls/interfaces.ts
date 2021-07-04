import { IColors } from "../../providers/ThemeProvider/interfaces";
import { ILang } from "../../providers/LangProvider/interfaces";

export interface IYearControls {
  lang: ILang;
  radius: number;
  theme: IColors;
  year: number;
  setYear(value: Date): void;
  x: number;
  y: number;
}