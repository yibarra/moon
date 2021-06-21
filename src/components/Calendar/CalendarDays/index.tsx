import React, { FC, useCallback } from 'react';
import { Spring, animated } from '@react-spring/konva';
import { Shape, Circle } from 'react-konva';
import hexRgb from 'hex-rgb';

import TextCircle from '../../Typography/TextCircle';

import UseFormat from '../../../uses/useFormat';

const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// calendar days
const CalendarDays: FC<any> = ({
  angle,
  day,
  radius,
  rotate,
  theme,
  x,
  y
}) => {
  const { convertToRoman } = UseFormat();

  // border line
  const borderLine = useCallback((ctx: CanvasRenderingContext2D) => {
    const circumference = (Math.PI * 2);

    const arcRadians = circumference / REACT_APP_TOTAL_ITEMS_DEGREE;
    const spacingRadians = circumference / radius;
    const spacing = 0.007;

    let currentAngle = 0;

    for (let i = 0; i < 32; i++) {
      const active: boolean = day === (i + 1);

      const startingAngle = currentAngle - (Math.PI / 33);
      const endingAngle = (startingAngle + arcRadians) - spacingRadians;

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'transparent';
      ctx.strokeStyle = active ? theme.main : theme.second;
      ctx.lineWidth = i === 31 ? 22 : 20;
      ctx.arc(x, y, radius, (startingAngle - spacing), (endingAngle + spacing), false);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();

      currentAngle += arcRadians;
    }

  }, [ day, radius, theme, x, y ]);

  // create days
  const createDays = useCallback((ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 31; i++) {
      const roman: any[] = Array.from(convertToRoman((i + 1)));
      const dayRoman: string = roman.reverse().join('').toString();
      
      ctx.save();
      ctx.beginPath();
      ctx.font = "700 8px Roboto Slab";
      ctx.strokeStyle = 'transparent';
      ctx.fillStyle = (day === (i + 1)) ? theme.second : theme.main;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      new TextCircle(ctx, dayRoman, x, y, radius, (angle * i), undefined, true); // text
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
  }, [ angle, convertToRoman, day, radius, theme, x, y ]);

  // render
  return (
    <Spring
      delay={650}
      from={{ rotation: 0 }}
      to={{ rotation: rotate }}>
      {props => (<animated.Group
        x={(window.innerWidth / 2)}
        y={(window.innerHeight / 2)}
        {...props}>
        <Circle
          fill="transparent"
          strokeWidth={21}
          listening={false}
          stroke={hexRgb(theme.main, { alpha: 0.1, format: 'css' })}
          radius={radius}
          x={x}
          y={y} />

        <Shape
          listening={false}
          sceneFunc={(ctx: any) => borderLine(ctx)} />

        <Shape
          sceneFunc={(ctx: any) => createDays(ctx)} />
      </animated.Group>)}
    </Spring>
  );
};

export default CalendarDays;