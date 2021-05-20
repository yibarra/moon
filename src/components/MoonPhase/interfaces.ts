import { IMonthPhase } from "../MonthRadius/interfaces";

export interface IMoonPhase {
  angle: number;
  day: number;
  month: number;
  phase: IMonthPhase;
  size: number;
  strokeWidth: number;
  x: number;
  y: number;
  year: number;
}