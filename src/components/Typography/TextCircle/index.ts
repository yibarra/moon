export default class TextCircle {
  public FILL = 0;        // const to indicate filltext render
  public STROKE = 1;
  public renderType = this.FILL; // used internal to set fill or stroke text
  public multiplyCurrentTransform = true; // if true Use current transform when rendering

  // constructor
  constructor(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, radius: number, start: number, end?: any, forward: boolean = true) {
    this.circleText(ctx, text, x, y, radius, start, end, forward = true);
  }

  // measure circle text
  measure(ctx: CanvasRenderingContext2D, text: string, radius: number) {
    const textWidth = ctx.measureText(text).width;

    return {
      width: textWidth,
      angularWidth: (1 / radius) * textWidth,
      pixelAngularSize: 1 / radius
    };
  }

  // displays text along a circle
  // ctx: canvas context
  // text: string of text to measure
  // x,y: position of circle center
  // r: radius of circle in pixels
  // start: angle in radians to start. 
  // [end]: optional. If included text align is ignored and the text is 
  //        scaled to fit between start and end;
  // [forward]: optional default true. if true text direction is forwards, if false  direction is backward
  circleText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, radius: number, start: number, end?: any, forward: boolean = true) {
    let textWidth, pA, pAS, a, aw, wScale, aligned, dir;

    if (text.trim() === "" || ctx.globalAlpha === 0)
      return;

    if (isNaN(x) || isNaN(y) || isNaN(radius) || isNaN(start) 
      || (end !== undefined && end !== null && isNaN(end))) {
      throw TypeError("circle text arguments requires a number for x,y, radius, start, and end.")
    }

    aligned = ctx.textAlign;        // save the current textAlign so that it can be restored at end
    dir = forward ? 1 : forward === false ? -1 : 1;  // set dir if not true or false set forward as true  
    pAS = 1 / radius;               // get the angular size of a pixel in radians
    textWidth = ctx.measureText(text).width; // get the width of all the text

    if (end !== undefined && end !== null) { // if end is supplied then fit text between start and end
      pA = ((end - start) / textWidth) * dir;
      wScale = (pA / pAS) * dir;
    } else {                 // if no end is supplied correct start and end for alignment
      // if forward is not given then swap top of circle text to read the correct direction
      if (forward === null || forward === undefined) {
        if (((start % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) > Math.PI) {
          dir = -1;
        }
      }

      pA = -pAS * dir;
      wScale = -1 * dir;

      switch (aligned) {
        case "center":       // if centered move around half width
          start -= (pA * textWidth) / 2;
          end = start + pA * textWidth;
          break;
        case "right":// intentionally falls through to case "end"
        case "end":
          end = start;
          start -= pA * textWidth;
          break;
        case "left":  // intentionally falls through to case "start"
        case "start":
          end = start + pA * textWidth;
      }
    }

    ctx.textAlign = "center";                     // align for rendering
    a = start;                                    // set the start angle

    for (let i = 0; i < text.length; i += 1) {    // for each character
      aw = ctx.measureText(text[i]).width * pA; // get the angular width of the text
      var xDx = Math.cos(a + aw / 2);           // get the yAxies vector from the center x,y out
      var xDy = Math.sin(a + aw / 2);

      if (this.multiplyCurrentTransform) { // transform multiplying current transform
        ctx.save();

        ctx.transform(-xDy * wScale, xDx * wScale, -xDx, -xDy, xDx * radius + x, xDy * radius + y);
      } else {
        if (xDy < 0) { // is the text upside down. If it is flip it
          ctx.setTransform(-xDy * wScale, xDx * wScale, -xDx, -xDy, xDx * radius + x, xDy * radius + y);
        } else {
          ctx.setTransform(-xDy * wScale, xDx * wScale, xDx, xDy, xDx * radius + x, xDy * radius + y);
        }
      }

      if (this.renderType === this.FILL) {
        ctx.fillText(text[i], 0, 0);    // render the character
      } else {
        ctx.strokeText(text[i], 0, 0);  // render the character
      }

      if (this.multiplyCurrentTransform) {  // restore current transform
        ctx.restore();
      }

      a += aw;                     // step to the next angle
    }

    // all done clean up.
    if (!this.multiplyCurrentTransform) {
      ctx.setTransform(1, 0, 0, 1, 0, 0); // restore the transform
    }

    ctx.textAlign = aligned; // restore the text alignment
  }

  // define fill text
  fillCircleText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, radius: number, start: number, end?: any, forward: boolean =  true) {
    this.renderType = this.FILL;
    this.circleText(ctx, text, x, y, radius, start, end, forward);
  }

  // define stroke text
  strokeCircleText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, radius: number, start: number, end: number, forward: boolean) {
    this.renderType = this.STROKE;
    this.circleText(ctx, text, x, y, radius, start, end, forward);
  }
  
  // define measure text
  measureCircleTextExt(ctx: CanvasRenderingContext2D, text: string, radius: number) {
    return this.measure(ctx, text, radius);
  }

  // text
  text(ctx: CanvasRenderingContext2D, font: string, text: string, x: number, y: number) {
    ctx.font = font;
    ctx.fillText(text, x, y);
  }
}