import { ReactNode } from "react";

export interface ILang {
  name: string;
  value: string;
}

export interface ILangContext {
  lang: ILang;
  langs: any[];
  setLang(value: ILang): void;
}

export interface ILangProvider {
  children: ReactNode;
}