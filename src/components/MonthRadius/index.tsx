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
  year
}) => {
  const date = parse(format(new Date(), 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date());
  const current = parse(`${year}-${month}-${date.getDate()}`, 'yyyy-MM-dd', new Date());

  const active: boolean = date.getMonth() >= current.getMonth(); // active month
  const currentMonth: boolean = date.getMonth() === current.getMonth(); // current month

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

  // percent
  const percent = useCallback(() => {
    if (active === true) {
      if (currentMonth === true) {
        return Math.floor((date.getDate() / totalItems) * 100) - ((Math.PI / 2) + 1.1);
      }

      return Math.ceil((day / totalItems) * 100) - ((Math.PI + 0.4));
    }

    return 0;
  }, [ active, currentMonth, date, day ]);

  // select day
  const selectDay = useCallback((day: number) => {
    if (!currentMonth) return 1;

    return day === date.getDate() ? 4 : 1;
  }, [ currentMonth, date ]);

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
        angle={angle}
        active={active}
        day={day}
        radius={radius}
        percent={percent()} />

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