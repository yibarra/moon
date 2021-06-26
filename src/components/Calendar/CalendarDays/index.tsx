import React, { FC, useCallback, useMemo } from 'react';
import { Spring, animated } from '@react-spring/konva';
import { Shape, Circle } from 'react-konva';
import hexRgb from 'hex-rgb';

import MayanNumber from '../../../helpers/mayanNumber';

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
  const mayan = useMemo(() => new MayanNumber(), []);

  // border line
  const borderLine = useCallback((ctx: CanvasRenderingContext2D) => {
    const circumference = (Math.PI * 2);

    const arcRadians = circumference / REACT_APP_TOTAL_ITEMS_DEGREE;
    const spacingRadians = circumference / radius;
    const spacing = 0.008;

    let currentAngle = 0;

    for (let i = 0; i < 32; i++) {
      const active: boolean = day === (i + 1);

      const startingAngle = currentAngle - (Math.PI / REACT_APP_TOTAL_ITEMS_DEGREE);
      const endingAngle = (startingAngle + arcRadians) - spacingRadians;

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'transparent';
      ctx.strokeStyle = active ? theme.second : theme.main;
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
      ctx.font = "700 7px Roboto Slab";
      ctx.strokeStyle = 'transparent';
      ctx.fillStyle = (day === (i + 1)) ? theme.main : theme.second;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      new TextCircle(ctx, dayRoman, 0, 0, radius, (angle * i), undefined, true); // text
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    mayan.mayanGlyph(4005).then(e => {
      console.log(e);
    });

  }, [ angle, convertToRoman, day, mayan, radius, theme ]);

  // render
  return (
    <Spring
      config={{
        duration: 450
      }}
      delay={90 * 11}
      from={{ rotation: 0 }}
      to={{ rotation: rotate }}>
      {props => (<animated.Group
        x={x}
        y={y}
        {...props}>
        <Circle
          fill="transparent"
          strokeWidth={22}
          listening={false}
          stroke={hexRgb(theme.second, { alpha: 0.1, format: 'css' })}
          radius={radius} />
        
        <Circle
          fill="transparent"
          strokeWidth={21}
          listening={false}
          stroke={hexRgb(theme.main, { alpha: 1, format: 'css' })}
          radius={radius} />

        <Shape
          listening={false}
          sceneFunc={(ctx: any) => createDays(ctx)} />
      </animated.Group>)}
    </Spring>
  );
};

export default CalendarDays;