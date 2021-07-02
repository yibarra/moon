export interface IInputRange {
  min: number;
  max: number;
  value: any;
  set(value: number): void;
}