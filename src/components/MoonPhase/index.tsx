import { Context } from 'konva/types/Context';
import { Shape as IShape } from 'konva/types/Shape';

import React, { FC, useCallback } from 'react';
import { Circle, Group, Shape, Text } from 'react-konva';
import UseMoon from '../../uses/useMoon';

import { IMoonPhase } from './interfaces';

// moon phase
const MoonPhase: FC<IMoonPhase> = ({
  day,
  angle,
  month,
  phase: {
    phaseName,
    lighting
  },
  size,
  x,
  year,
  y
}) => {
  const { getMoonFraction } = UseMoon();

  // phase
  const phase: number = getMoonFraction(year, month, day);
  const posX = (x + size / 2);
  const posY = (y + size / 2);

  // draw path
  const drawPath = useCallback((ctx: Context, posX: number, posY: number, size: number) => {
    ctx.beginPath();
		ctx.arc(posX, posY, size, -Math.PI/2, Math.PI/2, true);
		ctx.closePath();
  }, []);

  // draw phase
  const drawPhase = useCallback((ctx: Context, phase: number, shape: IShape) => {
    drawPath(ctx, posX, posY, size);
		shape.setAttr('fill', '#222');
    ctx.fillShape(shape);

		ctx.translate(posX, posY);
		ctx.scale(phase, 1);
		ctx.translate( -posX, -posY );

    drawPath(ctx, posX, posY, size);
    shape.setAttr('fill', phase > 0 ? '#fff' : '#222');
		ctx.fillShape(shape);
  }, [ drawPath, size, posX, posY ]);

  // shadow moon
  const shadowMoon = useCallback((ctx: Context, shape: IShape) => {
    if (phase <= 0.5) {
      drawPhase(ctx, 4 * phase - 1, shape);
    } else {
      ctx.translate(posX, posY);
			ctx.rotate(Math.PI);
			ctx.translate(-posX, -posY);

      drawPhase(ctx, 4 * (1 - phase) - 1, shape);
    }
  }, [ posX, posY, drawPhase, phase ]);



  // render
  return (
    <Group rotation={angle ? angle * day : 0}>
      <Text text={day.toString()} fontSize={12} y={y - 30} x={x - 5} fill="white" />
      <Group>
        <Circle
          x={posX}
          y={posY}
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