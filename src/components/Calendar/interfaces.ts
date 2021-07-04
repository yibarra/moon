import { IColors } from "../../providers/ThemeProvider/interfaces";
import { ILang } from "../../providers/LangProvider/interfaces";
import { IPos, ISize } from "../../providers/MainProvider/interfaces";

export interface ICalendar {
  lang: ILang;
  radius: number;
  setToday(value: Date): void;
  pos: IPos;
  setPos(value: any): void;
  theme: IColors;
  today: Date;
  size: ISize;
}