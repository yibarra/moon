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

  return (
    <>
      {factoryPhases(day).map(({ dayMonth }, index: number) =>
        <MonthDays
          angle={angle}
          currentMonth={currentMonth}
          day={dayMonth}
          index={index}
          key={index}
          month={month}
          radius={radius}
          setToday={setToday}
          theme={theme}
          today={today} />)} 
    </>
  );
};

export default MonthContainer;