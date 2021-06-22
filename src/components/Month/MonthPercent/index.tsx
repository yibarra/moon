import hexRgb from 'hex-rgb';
import { Context } from 'konva/types/Context';
import React, { FC, useCallback } from 'react';
import { Group, Circle } from 'react-konva';

import { IMonthPercent } from './interfaces';

// month radius percent
const MonthPercent: FC<IMonthPercent> = ({
  active,
  angle,
  currentMonth,
  day,
  month,
  radius,
  theme,
  today
}) => {
  // create mask
  const maskLines = useCallback((ctx: Context) => {
    if (active === true) {
      const value = Math.abs(angle * (day - 1));
      const total = Math.abs(angle * (today.getDate() - 1));
      
      if (today.getMonth() > (month - 1)) {
        ctx.arc(0, 0, radius, 0, value, false);
      } else {
        if (day === today.getDate()) {
          ctx.arc(0, 0, radius, 0, total, false);
        } else {
          ctx.arc(0, 0, radius, value, total, false);
        }
      }
    }
  }, [ active, angle, day, month, radius, today ]);

  // render
  return (
    <Group
      clipFunc={(ctx: Context) => maskLines(ctx)}>
        <Circle
          dash={[1, 2]}
          fill="transparent"
          listening={false}
          radius={radius}
          stroke={hexRgb(theme.main, { alpha: 0.8, format: 'css' })}
          strokeWidth={1}
          listen={false} />
    </Group>
  );
};

export default MonthPercent;