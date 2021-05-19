import { IMonthPhase } from "../MonthRadius/interfaces";

export interface IMoonPhase {
  size: number;
  x: number;
  y: number;
  day: number;
  phase: IMonthPhase;
  year: number;
  month: number;
}