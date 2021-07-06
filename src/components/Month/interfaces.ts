import { ISize } from "../../providers/MainProvider/interfaces";
import { IColors } from "../../providers/ThemeProvider/interfaces";

export interface IMonthPhase {
  dayWeek: number;
  dis: any;
  isPhaseLimit: boolean;
  lighting: any;
  npWidget: string;
  phaseName: string;
  svg: string;
  svgMini: boolean;
  timeEvent: boolean;
};

export interface IMonthData {
  autor: string;
  daysMonth: string;
  firstDayMonth: string;
  lang: string;
  language: string;
  month: number;
  monthName: string;
  nameDay: string [];
  nameMonth: string [];
  nextFullMoon: string;
  phase: any;
  receivedVariables: {
    month: string;
    year: string;
    lang: string;
    size: string;
    lightColor: string;
    texturize: string;
  };
  title: string [];
  version: string;
  year: number;
};

export interface IMonth {
  month: number;
  size: ISize;
  radius: number;
  setToday(value: any): void;
  today: Date;
  theme: IColors;
  x: number;
  y: number;
};