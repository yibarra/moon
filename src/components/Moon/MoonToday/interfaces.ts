import { ILang } from "../../../providers/LangProvider/interfaces";
import { ISize } from "../../../providers/MainProvider/interfaces";
import { IColors } from "../../../providers/ThemeProvider/interfaces";

export interface IMoonToday {
  lang: ILang;
  size: ISize;
  theme: IColors;
  radius: number;
  setToday(value: Date): void;
  today: Date;
  setPos(value: any): void;
  x: number;
  y: number;
}