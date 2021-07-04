import { ILang } from "../../../providers/LangProvider/interfaces";

export interface IButtonArrow {
  color: string;
  lang: ILang;
  onClick(): void;
  text?: string;
  type?: string;
  x: number;
  y: number;
}