import React, { FC, useCallback } from 'react';
import { animated, Spring } from '@react-spring/konva';
import { Circle } from 'react-konva';
import hexRgb from 'hex-rgb';

import UseMoon from '../../../uses/useMoon';

import { Context } from 'konva/types/Context';
import { Shape as IShape } from 'konva/types/Shape';

import { IMoonPhase } from './interfaces';

// moon phase
const MoonPhase: FC<IMoonPhase> = ({
  bg = false,
  day,
  dashed = [ 0, 0 ],
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
  }, [ drawPath, size, theme, x, y ]);

  // shadow moon
  const shadowMoon = useCallback((ctx: Context, shape: IShape, phases: any) => {
    const phase = phases.get();

    if (phase <= 0.5) {
      drawPhase(ctx, 4 * phase - 1, shape);
    } else {
      ctx.translate(x, y);
			ctx.rotate(Math.PI);
			ctx.translate(-x, -y);

      drawPhase(ctx, 4 * (1 - phase) - 1, shape);
    }
  }, [ x, y, drawPhase ]);

  // render
  return (
    <>
      <Circle
        x={x}
        y={y}
        radius={size + 5}
        fill="transparent"
        stroke={bg ? hexRgb(theme.main, { alpha: 0.6, format: 'css' }) : 'transparent'}
        dash={dashed}
        strokeWidth={1} />

      <Circle
        x={x}
        y={y}
        fill={theme.main}
        stroke={theme.main}
        strokeWidth={strokeWidth}
        radius={size} />

      <Spring
        from={{ phase: 0 }}
        to={{
          phase: getMoonFraction(year, month, day)
        }}>
        {(props: any) => (
          <animated.Shape
            {...props}
            sceneFunc={(ctx: Context, shape: any) => shadowMoon(ctx, shape, props.phase.to((n: any) => n))}
            fill={props.phase > 0 ? theme.main : theme.second }>
          </animated.Shape>)}
      </Spring>
    </>
  );
};

export default MoonPhase;

/*
<Spring
      config={{
        duration: 150 * month,
      }}
      delay={50 * month}
      from={{ rotation: 0 }}
      to={{ rotation: rotate }}>
      {props => (<animated.Group
        {...props}
        
*/