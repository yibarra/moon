//import TextCircle from '../components/Typography/TextCircle';

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
        x: x + 1,
        y: y + (this.height - (i * (this.height / glyphs.length)))
      };

      //new TextCircle(ctx, glyph, 0, 0, radius, (angle * day), undefined, true); 

      ctx.save();

      ctx.beginPath();
      ctx.font = `${this.width - 2}px/1 MayanNumerals`;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      //new TextCircle(ctx, glyph, 0, 0, radius, (angle * day), undefined, true); 
      ctx.fillText(glyph, pos.x, pos.y);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    ctx.save();
    ctx.rect(x, y, this.width, this.height);
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.1)';
    ctx.stroke();
    ctx.restore();
  }
}