import React, { FC, useCallback } from 'react';
import { Group, Shape } from 'react-konva';

import UseFormat from '../../../uses/useFormat';
import TextCircle from '../../Typography/TextCircle';

// calendar days
const CalendarDays: FC<any> = ({
  angle,
  day,
  radius,
  theme,
  x,
  y
}) => {
  const { convertToRoman } = UseFormat();

  // create days
  const createDays = useCallback((ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 31; i++) {
      const roman: any[] = Array.from(convertToRoman((i + 1)));
      const dayRoman: string = roman.reverse().join('').toString();
      
      ctx.save();
      ctx.font = "700 10px Roboto Slab";
      ctx.fillStyle = (day === (i + 1)) ? theme.second : theme.main;
      ctx.textBaseline = "middle";
      new TextCircle(ctx, dayRoman, x, y, radius, (angle * i), undefined, true); // text
      ctx.fill();
      ctx.restore();
    }
  }, [ angle, convertToRoman, day, radius, theme, x, y ]);

  // render
  return (
    <Group>
      <Shape
        sceneFunc={(ctx: any) => createDays(ctx)} />
    </Group>
  );
};

export default CalendarDays;