export interface ICalendar {
  today: string;
  setToday(value: any): void;
  setYear(value: number): void;
  year: number;
}