import { parse, format, getDaysInMonth } from 'date-fns';
import React, { FC, useCallback } from 'react';
import { Group } from 'react-konva';

import MoonPhase from '../MoonPhase';
import MonthRadiusName from './MonthRadiusName';
import MonthRadiusPercent from './MonthRadiusPercent';

import { IMonthRadius } from './interfaces';

// total
const totalItems: number = 32;

// month radius
const MonthRadius: FC<IMonthRadius> = ({
  month,
  radius,
  today,
  year
}) => {
  const current = parse(`${year}-${month}-${today.getDate()}`, 'yyyy-MM-dd', new Date());

  const todayMonth: number = today.getMonth();
  const todayYear: number = today.getFullYear();

  const monthMonth: number = current.getMonth();
  const monthYear: number = current.getFullYear();

  const active: boolean = 
    (todayMonth >= monthMonth && todayYear === monthYear) || todayYear > monthYear; // active month
  const currentMonth: boolean = 
    todayMonth === monthMonth && todayYear === monthYear; // current month

  const day = getDaysInMonth(current); // day
  const angle = (2 * Math.PI) / totalItems; // angle

  // factory phases
  const factoryPhases = useCallback((day: number) => {
    const items = [];

    for (let i = 0; i < day; i++) {
      items.push({ day: i + 1 });
    }

    return items;
  }, []);

  // select day
  const selectDay = useCallback((day: number) => {
    if (!currentMonth) return 1;

    return day === today.getDate() ? 3 : 1;
  }, [ currentMonth, today ]);

  // month
  return (
    <Group
      x={(window.innerWidth / 2)}
      y={(window.innerHeight / 2)}>
      <MonthRadiusName
        angle={angle * month}
        month={month}
        radius={radius}
        text={format(current, 'MMM')} />

      <MonthRadiusPercent
        active={active}
        angle={angle}
        currentMonth={currentMonth}
        day={day}
        today={today.getDate()}
        radius={radius} />

      {factoryPhases(day).map(({ day }, index: number) =>
        <MoonPhase
          angle={angle * index}
          day={day}
          month={month}
          size={4}
          strokeWidth={selectDay(day)}
          x={Math.cos(angle * index) * radius}
          y={Math.sin(angle * index) * radius}
          year={year}
          key={index} />)}
    </Group>
  );
};

export default MonthRadius;