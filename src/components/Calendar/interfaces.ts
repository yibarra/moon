import { IColors } from "../../providers/ThemeProvider/interfaces";
import { ILang } from "../../providers/LangProvider/interfaces";
import { IPos, ISize } from "../../providers/MainProvider/interfaces";

export interface ICalendar {
  animate: boolean;
  setAnimate(val: boolean): void;
  scale: number;
  lang: ILang;
  radius: number;
  setToday(value: Date): void;
  pos: IPos;
  setPos(value: any): void;
  theme: IColors;
  today: Date;
  size: ISize;
}