import React, { FC, useCallback } from 'react';
import { Spring, animated } from '@react-spring/konva';
import { Shape } from 'react-konva';

import UseFormat from '../../../uses/useFormat';
import TextCircle from '../../Typography/TextCircle';

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
    const arcRadians = (Math.PI * 2) / 32;
    const spacingRadians = (Math.PI * 2) / radius;

    let currentAngle = 0;

    for (let i = 0; i < 31; i++) {
      const active: boolean = day === (i + 1);

      const startingAngle = currentAngle - (Math.PI / 34);
      const endingAngle = startingAngle + arcRadians - spacingRadians;

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'transparent';
      ctx.strokeStyle = active ? theme.main : theme.second;
      ctx.lineWidth = 20;
      ctx.arc(x, y, radius, startingAngle, endingAngle, false);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      // this.circleLine(ctx, x, y, radius, [0, 0], color, startingAngle, endingAngle, false, 40);

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
        <Shape
          sceneFunc={(ctx: any) => borderLine(ctx)} />

        <Shape
          sceneFunc={(ctx: any) => createDays(ctx)} />
      </animated.Group>)}
    </Spring>
  );
};

export default CalendarDays;