import { format, parse } from 'date-fns';
import React, { FC, useCallback } from 'react';
import { Circle, Group } from 'react-konva';

import MoonPhase from '../../Moon/MoonPhase';

import { IMonthDays } from './interfaces';

// month days
const MonthDays: FC<IMonthDays> = ({
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
  const form: string = 'yyyy/MM/dd';
  const active: boolean = day === today.getDate();

  // pos
  const pos: any = {
    x: Math.cos(angle * (day - 1)) * radius || 0,
    y: Math.sin(angle * (day - 1)) * radius || 0
  };

  // select day
  const selectDay = useCallback((): number => {
    if (currentMonth === false) return 2;

    return active ? 1 : 2;
  }, [ active, currentMonth ]);

  // select
  const selectDate = useCallback(() =>
    setToday(parse(
      format(new Date(`${today.getFullYear()}/${month}/${day}`), form), form, new Date()
    )), [ day, month, setToday, today ]);

  // render
  return (
    <Group
      rotation={90}
      offsetX={pos.x}
      offsetY={pos.y}
      listening={true}
      onClick={selectDate}
      onTap={selectDate}
      {...pos}>
      {(day === 1 || day === lastDay) &&
        <Circle
          listening={false}
          fill={theme.main}
          radius={7.5}
          {...pos} /> }

      {(day === today.getDate() && currentMonth) &&
        <Circle
          listening={false}
          fill={theme.main}
          stroke={theme.second}
          strokeWidth={2}
          radius={4}
          {...pos} />}

      <MoonPhase
        day={day}
        month={month}
        size={3}
        theme={theme}
        strokeWidth={selectDay()}
        year={today.getFullYear()}
        {...pos} />
    </Group>
  );
};

export default MonthDays;