import { Context } from 'konva/types/Context';
import React, { FC, useCallback } from 'react';
import { Circle, Group } from 'react-konva';

import { IMonthRadiusPercent } from './interfaces';

// month radius percent
const MonthRadiusPercent: FC<IMonthRadiusPercent> = ({
  active,
  angle,
  day,
  radius,
  percent
}) => {
  const circumference = 2 * Math.PI * radius; // circumference

  // create mask
  const maskLines = useCallback((ctx: Context) => {
    const value = Math.abs(angle * (day - 1));

    ctx.arc(0, 0, radius, value || 0, Math.PI * 2, true);
  }, [ radius, day, angle ]);

  // render
  return (
    <>
      <Group clipFunc={maskLines}>
        <Circle
          radius={radius}
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth={1}
          dash={[2, 4]} />
      </Group>

      <Circle
        dash={[ percent / 100 * circumference, circumference ]}
        radius={radius}
        fill="transparent"
        stroke={active === true ? 'white' : 'transparent'}
        strokeWidth={1} />
    </>
  );
};

export default MonthRadiusPercent;