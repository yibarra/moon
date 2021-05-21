import { Spring, animated } from '@react-spring/konva';
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

      <Spring
        delay={300}
        from={{ dash: [0, circumference] }}
        to={{ dash: [ percent / 100 * circumference, circumference ] }}>
        {props => (
          <animated.Circle
            {...props}
            radius={radius}
            fill="transparent"
            stroke={active === true ? 'rgba(255, 255, 255, 0.7)' : 'transparent'}
            strokeWidth={1} />
        )}
      </Spring>

      
    </>
  );
};

export default MonthRadiusPercent;