import { ReactNode } from "react";

export interface ISize {
  height: number;
  width: number;
}

export interface IPos {
  x: number;
  y: number;
}

export interface IMainContext {
  date: Date;
  loaded: boolean;
  radius: number;
  scale: number;
  setScale(value: number): void;
  setRadius(value: number): void;
  size: ISize;
  setDate(value: Date): void;
  pos: IPos;
  setPos(value: any): void;
}

export interface IMainProvider {
  children: ReactNode;
}