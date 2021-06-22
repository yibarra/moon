export interface IInputRange {
  min: number;
  max: number;
  value: any;
  setValue(value: number): void;
}