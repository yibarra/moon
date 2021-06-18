import { ReactNode } from "react";

export interface IColors {
  main: string;
  second: string;
}

export interface IThemeContext {
  theme: IColors;
  setColors(main: string, second: string): void;
}

export interface IThemeProvider {
  children: ReactNode;
}