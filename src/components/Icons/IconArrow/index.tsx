import { Context } from 'konva/types/Context';
import React, { FC, useCallback } from 'react';
import { Shape, Rect } from 'react-konva';

import { IIconArrow } from './interfaces';

// icon arrow
const IconArrow: FC<IIconArrow> = ({
  color,
  offsetX = 10,
  offsetY = 30,
  type,
  x,
  y
}) => {
  // line
  const line = useCallback((ctx: Context, pos: any, line: any) => {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(line.x, line.y);
    ctx.setAttr('strokeStyle', color);
    ctx.setAttr('lineWidth', 1);
    ctx.stroke();
    ctx.closePath();
  }, [ color ]);

  // point
  const point = useCallback((ctx: Context) => {
    const offY = (offsetY + 5);
    const PosX = (type === 'right') ? offY : -offY;

    ctx.save();
    ctx.arc(x - PosX, y + 3, 1, 0, Math.PI * 2, false);
    ctx.setAttr('fillStyle', color);
    ctx.fill();
    ctx.restore();
  }, [ color, offsetY, type, x, y ]);

  // icon
  const icon = useCallback((ctx: Context) => {
    ctx.save();

    if (type === 'right') {
      ctx.translate(0, 3);
      ctx.translate(x, y);
      ctx.rotate(Math.PI);
      ctx.translate(-x, -y);
    } else {
      ctx.translate(0, 3);
    }
    
    line(ctx, { x, y }, { x: x + offsetX, y: y - offsetX });
    line(ctx, { x: x + offsetY, y }, { x, y });
    line(ctx, { x, y }, { x: x + offsetX, y: y + offsetX });

    ctx.restore();

    point(ctx);
  }, [ line, offsetX, offsetY, point, type, x, y ]);

  // render
  return (
    <>
      <Rect
        fill="transparent"
        height={offsetY}
        scaleX={type === "right" ? -1 : 1}
        x={x}
        y={y - ((offsetY / 2) / 2)}
        width={offsetY} />

      <Shape
        sceneFunc={(ctx: Context) => icon(ctx)} />
    </>
  );
};

export default IconArrow;