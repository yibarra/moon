export interface IInputSwitch {
  labelL?: string;
  labelR?: string;
  name: string;
  onChange(value: any): void;
  value: any;
}