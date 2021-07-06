import React, { FC, useCallback } from 'react';

import MonthDays from '../MonthDays';

import { IMonthContainer } from './interfaces';

// month container
const MonthContainer: FC<IMonthContainer> = ({
  angle,
  currentMonth,
  day,
  month,
  radius,
  rotate,
  setToday,
  theme,
  today
}) => {
  // factory phases
  const factoryPhases = useCallback((day: number) => {
    const items = [];

    for (let i = 0; i < day; i++) {
      items.push({ dayMonth: i + 1 });
    }

    return items;
  }, []);

  const items = factoryPhases(day);

  // render
  return (
    <>
      {items.map(({ dayMonth }, index: number) =>
        <MonthDays
          angle={(angle)}
          currentMonth={currentMonth}
          day={dayMonth}
          key={index}
          month={month}
          lastDay={items.length}
          radius={radius}
          setToday={setToday}
          theme={theme}
          today={today} />)} 
    </>
  );
};

export default MonthContainer;