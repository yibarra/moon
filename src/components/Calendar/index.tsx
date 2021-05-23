import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';

import MonthRadius from '../MonthRadius';
import MoonToday from '../MoonToday';
import YearControls from '../YearControls';

import { ICalendar } from './interfaces';

// calendar
const Calendar: FC<ICalendar> = ({
  today,
  setYear,
  setToday,
  year,
}) => {
  const increment = 20;
  const size = 120;

  // create months
  const createMonths = useCallback(() => {
    const months = [];
    const total: number = 12;

    for (let i = 1; i <= total; i++) {
      months.push(<MonthRadius
        month={i}
        radius={size + (i * increment)}
        today={today}
        year={year}
        setToday={setToday}
        key={i} />);
    }

    return months;
  }, [ size, today, year, setToday ]);

  // render
  return (
    <Layer
      id="calendar"
      height={window.innerHeight}
      width={window.innerWidth}>
      {createMonths()}

      <MoonToday
        today={today}
        year={year}
        setYear={setYear} />
      
      <YearControls
        radius={size + (12 * increment)}
        setYear={setYear}
        year={year} />
    </Layer>
  );
};

export default Calendar;