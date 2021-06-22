import { ReactNode } from "react";

export interface ISize {
  height: number;
  width: number;
}

export interface IMainContext {
  date: Date;
  loaded: boolean;
  radius: number;
  setRadius(value: number): void;
  size: ISize;
  setDate(value: Date): void;
}

export interface IMainProvider {
  children: ReactNode;
}