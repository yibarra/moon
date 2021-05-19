import { IMonthPhase } from "../MonthRadius/interfaces";

export interface IMoonPhase {
  angle: number;
  size: number;
  x: number;
  y: number;
  day: number;
  phase: IMonthPhase;
  year: number;
  month: number;
}