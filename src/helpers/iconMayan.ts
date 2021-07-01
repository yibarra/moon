// icon mayan
export default class IconMayan {
  public height: number;
  public width: number;

  // constructor
  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }

  // get icon
  getIcon(ctx: CanvasRenderingContext2D, glyphs: string, x: number, y: number, color: string, day: number, angle: number, radius: number) {
    for (let i = 0; i < glyphs.length; i++) {
      const glyph = glyphs[i];
      
      const pos = {
        x: x,
        y: y + (this.height - (i * (this.height / glyphs.length)))
      };
      
      ctx.save();
      ctx.translate(x, y);
      //ctx.rotate(-(angle * day) + (Math.PI / 2));
      ctx.translate(-x, -y);

      ctx.beginPath();
      ctx.font = `${this.width - 2}px MayanNumerals`;
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle'; 
      ctx.fillText(glyph, pos.x, pos.y - (this.height));
      ctx.fill();
      ctx.closePath();

      ctx.rect(x - (this.width / 2), y - (this.height / 2), this.width, this.height);
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.1)';
      ctx.stroke();
      ctx.restore();
    }
  }
}