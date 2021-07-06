import { ILang } from "../../providers/LangProvider/interfaces";

export interface ILangSelect {
  lang: ILang;
  langs: ILang[];
  setLang(value: ILang): void;
}