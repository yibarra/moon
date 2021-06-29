// mayan number
export default class MayanNumber {
  // constructor
  constructor() {
    this.mayanGlyph = this.mayanGlyph.bind(this);
  }

  // base 20
  base20(num: any) {
    return num.toString(20).split("").map((s: string) => parseInt(s, 20));
  }

  // mayan glyph
  async mayanGlyph(value: any) {
    const digits = this.base20(value);
    const mayan = digits.map((n: any) => String.fromCharCode(0xD834, 0xDEE0 + n));

    return mayan;
  }
}