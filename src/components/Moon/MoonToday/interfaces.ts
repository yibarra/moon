import { IColors } from "../../../providers/ThemeProvider/interfaces";
import { ILang } from "../../../providers/LangProvider/interfaces";

export interface IMoonToday {
  animate: boolean;
  lang: ILang;
  radius: number;
  setToday(value: Date): void;
  theme: IColors;
  today: Date;
  x: number;
  y: number;
}