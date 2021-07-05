export interface IInputRange {
  label?: string;
  min: number;
  max: number;
  value: any;
  set(value: number): void;
}