import { ReactNode } from "react";

export interface IMoonContext {
  getMoonFraction(year: number, month: number, day: number): number;
  getMoonPhaseName(year: number, month: number, day: number): string;
}

export interface IMoonProvider {
  children: ReactNode;
}