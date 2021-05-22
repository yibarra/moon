import { Spring, animated } from '@react-spring/konva';
import { Context } from 'konva/types/Context';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Circle, Group } from 'react-konva';

import { IMonthRadiusPercent } from './interfaces';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// month radius percent
const MonthRadiusPercent: FC<IMonthRadiusPercent> = ({
  active,
  angle,
  currentMonth,
  day,
  month,
  radius,
  today
}) => {
  const [ percent, setPercent ] = useState<number>(0);
  const circumference = 2 * Math.PI * radius; // circumference

  // create mask
  const maskLines = useCallback((ctx: Context) => {
    const value = Math.abs(angle * (day - 1));

    ctx.arc(0, 0, radius, value || 0, Math.PI * 2, true);
  }, [ radius, day, angle ]);

  // percent
  const onPercent = useCallback((active: boolean) => {
    let total: number = 0;
    
    if (active === true) {
      if (currentMonth === true) {
        total = Math.floor((today / REACT_APP_TOTAL_ITEMS_DEGREE) * 100) - ((Math.PI / 2) + 1.1);
      } else {
        total = Math.ceil((day / REACT_APP_TOTAL_ITEMS_DEGREE) * 100) - ((Math.PI + 0.4));
      }
    }

    setPercent((total / 100) * circumference);
  }, [ currentMonth, circumference, day, today ]);

  // use effect
  useEffect(() => {
    onPercent(active);
  }, [ active, onPercent ]);

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
        config={{
          duration: 1000
        }}
        delay={120 * month}
        from={{ dash: [ 0, 0] }}
        to={{ dash: [ percent, circumference ] }}>
        {props => (
          <animated.Circle
            {...props}
            radius={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth={1} />
        )}
      </Spring>
    </>
  );
};

export default MonthRadiusPercent;