import { Spring, animated } from '@react-spring/konva';
import { format, parse } from 'date-fns';
import React, { FC, useCallback } from 'react';

import MoonPhase from '../../Moon/MoonPhase';

// month days
const MonthDays: FC<any> = ({
  angle,
  currentMonth,
  day,
  month,
  radius,
  setToday,
  theme,
  today
}) => {
  const form: string = 'yyyy-M-dd';

  // select day
  const selectDay = useCallback((day: number) => {
    if (currentMonth === false) return 1;

    return day === today.getDate() ? 3 : 1;
  }, [ currentMonth, today ]);

  // select
  const selectDate = useCallback((day: number) => 
    setToday(parse(
      format(new Date(`${today.getFullYear()}-${month}-${day}`), form), form, new Date())
    ), [ month, setToday, today ]);

  // render
  return (
    <Spring
      from={{
        x: 0,
        y: 0
      }}
      to={{
        x: Math.cos(angle * (day - 1)) * radius || 0,
        y: Math.sin(angle * (day - 1)) * radius || 0
      }}>
      {(props: any) => (
        <animated.Group
          listening={true}
          onClick={() => selectDate(day)}
          onTap={() => selectDate(day)}
          {...props}>
          <MoonPhase
            day={day}
            dashed={[0, 0]}
            month={month}
            size={4}
            theme={theme}
            strokeWidth={selectDay(day)}
            x={0}
            y={0}
            year={today.getFullYear()} />
        </animated.Group>)}
    </Spring>
  );
};

export default MonthDays;