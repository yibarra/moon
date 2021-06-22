import { format, parse } from 'date-fns';
import React, { FC, useCallback } from 'react';
import { Circle, Group } from 'react-konva';

import MoonPhase from '../../Moon/MoonPhase';

// month days
const MonthDays: FC<any> = ({
  angle,
  currentMonth,
  day,
  month,
  lastDay,
  radius,
  setToday,
  theme,
  today
}) => {
  const form: string = 'yyyy-M-dd';
  const active: boolean = day === today.getDate();

  // select day
  const selectDay = useCallback((): number => {
    if (currentMonth === false) return 2;

    return active ? 3 : 2;
  }, [ active, currentMonth ]);

  // select
  const selectDate = useCallback((day: number) => 
    setToday(parse(
      format(new Date(`${today.getFullYear()}-${month}-${day}`), form), form, new Date())
    ), [ month, setToday, today ]);

  // render
  return (
    <Group
      listening={true}
      onClick={() => selectDate(day)}
      onTap={() => selectDate(day)}>
      {(day === 1 || day === lastDay) &&
        <Circle
          fill={theme.main}
          radius={9}
          x={Math.cos(angle * (day - 1)) * radius || 0}
          y={Math.sin(angle * (day - 1)) * radius || 0} /> }

      {(day === today.getDate() && currentMonth) && <Circle
        fill={theme.main}
        stroke={theme.second}
        strokeWidth={2}
        radius={4}
        x={Math.cos(angle * (day - 1)) * radius || 0}
        y={Math.sin(angle * (day - 1)) * radius || 0} />}

      <MoonPhase
        day={day}
        month={month}
        size={3}
        theme={theme}
        strokeWidth={selectDay()}
        x={Math.cos(angle * (day - 1)) * radius || 0}
        y={Math.sin(angle * (day - 1)) * radius || 0}
        year={today.getFullYear()} />
    </Group>
  );
};

export default MonthDays;