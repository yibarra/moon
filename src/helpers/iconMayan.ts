// icon mayan
export default class IconMayan {
  public size: number;

  // constructor
  constructor(size: number) {
    this.size = size;
  }

  // get icon
  getIcon(ctx: CanvasRenderingContext2D, glyphs: string[]) {
    console.log(glyphs, '/');

    for (let i = 0; i < glyphs.length; i++) {
      const rows = glyphs[i];

      for (let j = 0; j < rows.length; j++) {
        const glyph = rows[j];

        ctx.beginPath();
        this.type(ctx, glyph, j);
        ctx.closePath();
      }
    }
  }

  // line
  line(ctx: CanvasRenderingContext2D, x: number) {
    // line
  }

  // point
  point(ctx: CanvasRenderingContext2D, x: number) {
    ctx.arc(x, 0, this.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
  }

  // type
  type(ctx: CanvasRenderingContext2D, glyph: string, index: number) {
    switch (glyph) {
      case '1':
        return 
      case '2':
        return
      case '0':
      default:
        return this.point(ctx, index * this.size);
    }
  }
}