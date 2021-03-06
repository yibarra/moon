import React, { FC, useCallback } from 'react';
import { animated as a, Spring } from '@react-spring/konva';
import { Circle } from 'react-konva';
import hexRgb from 'hex-rgb';

import { Shape as IShape } from 'konva/types/Shape';
import { Context } from 'konva/types/Context';

import UseMoon from '../../../uses/useMoon';

import { IMoonPhase } from './interfaces';

// moon phase
const MoonPhase: FC<IMoonPhase> = ({
  angle = 0,
  active = true,
  day,
  delay = 200,
  month,
  size,
  strokeWidth,
  theme,
  x,
  y,
  year,
}) => {
  const { getMoonFraction } = UseMoon(); // get moon fraction

  // draw path
  const drawPath = useCallback((ctx: Context, posX: number, posY: number, size: number) => {
    const radius = Math.PI / 2;

    ctx.beginPath();
		ctx.arc(posX, posY, size, -radius, radius, true);
		ctx.closePath();
  }, []);

  // draw line
  const drawLine = useCallback((ctx: Context, color: string) => {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y -(size - 1));
    ctx.lineTo(x, y + (size));
    ctx.setAttr('strokeStyle', color);
    ctx.setAttr('lineWidth', 1);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }, [ size, x, y ]);

  // draw phase
  const drawPhase = useCallback((ctx: Context, phase: number, shape: IShape) => {
    drawPath(ctx, x, y, size);
		shape.setAttr('fill', theme.second);
    ctx.fillShape(shape);

		ctx.translate(x, y);
		ctx.scale(phase, 1);
		ctx.translate( -x, -y );

    drawPath(ctx, x, y, size);
    shape.setAttr('fill', phase > 0 ? theme.main : theme.second);
		ctx.fillShape(shape);

    drawLine(ctx, phase < 0.1 ? theme.second : theme.main);
  }, [ drawLine, drawPath, size, theme, x, y ]);

  // shadow moon
  const shadowMoon = useCallback((ctx: Context, shape: IShape, phases: any) => {
    const phase = phases.get();

    if (phase <= 0.5) {
      drawPhase(ctx, 4 * phase - 1, shape);
    } else {
      ctx.translate(x, y);
			ctx.rotate(angle);
			ctx.translate(-x, -y);

      drawPhase(ctx, 4 * (1 - phase) - 1, shape);
    }
  }, [ angle, drawPhase, x, y ]);

  // render
  return (
    <>
      <Circle
        fill={theme.main}
        listening={false}
        radius={size + 1} 
        stroke={hexRgb(theme.second, { alpha: 0.5, format: 'css' })}
        strokeWidth={0.5}
        x={x}
        y={y} />

      <Circle
        fill={theme.main}
        listening={active}
        radius={size} 
        stroke={theme.main}
        strokeWidth={strokeWidth}
        x={x}
        y={y} />

      <Spring
        delay={delay}
        from={{ phase: 0 }}
        to={{
          phase: getMoonFraction(year, month, day)
        }}>
        {(props: any) => (
          <a.Shape
            {...props}
            listening={false}
            sceneFunc={(ctx: Context, shape: any) => shadowMoon(ctx, shape, props.phase.to((n: any) => n))}
            fill={props.phase > 0 ? theme.second : theme.main }>
          </a.Shape>)}
      </Spring>
    </>
  );
};

export default MoonPhase;