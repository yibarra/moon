import { Spring, animated } from '@react-spring/konva';
import hexRgb from 'hex-rgb';
import { Context } from 'konva/types/Context';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Circle, Group } from 'react-konva';

import { IMonthPercent } from './interfaces';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

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
  const [ percent, setPercent ] = useState<number>(0);
  const circumference = 2 * Math.PI * radius; // circumference

  // create mask
  const maskLines = useCallback((ctx: Context) => {
    const value = Math.abs(angle * day);

    ctx.arc(0, 0, radius, value || 0, (-(Math.PI / 2) + angle), true);
  }, [ radius, day, angle ]);

  // percent
  const onPercent = useCallback((active: boolean) => {
    let total: number = 0;
    
    if (active === true) {
      if (currentMonth === true) {
        total = Math.floor(((today - 1) / (day + 1)) * 100);
      } else {
        total = Math.floor(((day - 1) / REACT_APP_TOTAL_ITEMS_DEGREE) * 100);
      }
    }

    setPercent(total < 0 ? 0 : ((total / 100) * circumference));
  }, [ currentMonth, circumference, day, today ]);

  // use effect
  useEffect(() => {
    onPercent(active);
  }, [ active, onPercent ]);

  // render
  return (
    <Group
      listening={false}>
      <Group
        clipFunc={maskLines}>
        <Circle
          radius={radius}
          fill="transparent"
          stroke={hexRgb(theme.main, { alpha: 0.2, format: 'css' })}
          strokeWidth={1}
          dash={[1, 2]} />
      </Group>

      <Spring
        config={{
          duration: 700,
          friction: 10,
          mass: 1
        }}
        delay={100 * month}
        from={{ dash: [ 0, 0] }}
        to={{ dash: [ percent, circumference ] }}>
        {props => (
          <animated.Circle
            {...props}
            radius={radius}
            fill="transparent"
            stroke={hexRgb(theme.main, { alpha: 0.5, format: 'css' })}
            strokeWidth={1}
            listen={false} />)}
      </Spring>
    </Group>
  );
};

export default MonthPercent;