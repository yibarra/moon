import { Context } from 'konva/types/Context';
import { Shape as IShape } from 'konva/types/Shape';

import React, { FC, useCallback } from 'react';
import { Circle, Group, Shape } from 'react-konva';
import UseMoon from '../../uses/useMoon';

import { IMoonPhase } from './interfaces';

// moon phase
const MoonPhase: FC<IMoonPhase> = ({
  angle,
  day,
  month,
  size,
  x,
  y,
  year,
}) => {
  const { getMoonFraction } = UseMoon();

  // phase
  const phase: number = getMoonFraction(year, month, day);

  // draw path
  const drawPath = useCallback((ctx: Context, posX: number, posY: number, size: number) => {
    ctx.beginPath();
		ctx.arc(posX, posY, size, -Math.PI/2, Math.PI/2, true);
		ctx.closePath();
  }, []);

  // draw phase
  const drawPhase = useCallback((ctx: Context, phase: number, shape: IShape) => {
    drawPath(ctx, x, y, size);
		shape.setAttr('fill', '#222');
    ctx.fillShape(shape);

		ctx.translate(x, y);
		ctx.scale(phase, 1);
		ctx.translate( -x, -y );

    drawPath(ctx, x, y, size);
    shape.setAttr('fill', phase > 0 ? '#fff' : '#222');
		ctx.fillShape(shape);
  }, [ drawPath, size, x, y ]);

  // shadow moon
  const shadowMoon = useCallback((ctx: Context, shape: IShape) => {
    if (phase <= 0.5) {
      drawPhase(ctx, 4 * phase - 1, shape);
    } else {
      ctx.translate(x, y);
			ctx.rotate(Math.PI);
			ctx.translate(-x, -y);

      drawPhase(ctx, 4 * (1 - phase) - 1, shape);
    }
  }, [ x, y, drawPhase, phase ]);

  // render
  return (
    <Group
      rotation={angle}>
      <Group>
        <Circle
          x={x}
          y={y}
          fill="white"
          stroke="white"
          radius={size} />

        <Shape
          sceneFunc={shadowMoon}
          fill={phase > 0 ? 'white' : '#222'} />
      </Group>
    </Group>
  );
};

export default MoonPhase;