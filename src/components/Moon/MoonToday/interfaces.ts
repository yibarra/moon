import { IColors } from "../../../providers/ThemeProvider/interfaces";
import { ILang } from "../../../providers/LangProvider/interfaces";

export interface IMoonToday {
  lang: ILang;
  theme: IColors;
  radius: number;
  setToday(value: Date): void;
  today: Date;
  setPos(value: any): void;
  x: number;
  y: number;
}