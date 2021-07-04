import { Context } from 'konva/types/Context';

// Hook
function UseShapes() {
  // create circle
  const createCircle = (ctx: Context, options: {}, radius: number, init: number, end: number, close: boolean = false, x: number, y: number) => {
    ctx.save();
    ctx.beginPath();

    for (let item of Object.entries(options)) {
      ctx.setAttr(item[0], item[1]);
    }

    ctx.arc(x, y, radius, init, end, close);
    ctx.fill();
    ctx.stroke();

    ctx.closePath();
    ctx.restore();
  };

  return {
    createCircle
  };
}

export default UseShapes;