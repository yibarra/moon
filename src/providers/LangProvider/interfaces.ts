import { ReactNode } from "react";

export interface ILang {
  name: string;
  value: string;
}

export interface ILangContext {
  lang: ILang;
  setLang(value: ILang): void;
}

export interface ILangProvider {
  children: ReactNode;
}