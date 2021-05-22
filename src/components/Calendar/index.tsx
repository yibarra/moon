import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';

import MonthRadius from '../MonthRadius';
import MoonToday from '../MoonToday';
import YearControls from '../YearControls';

import { ICalendar } from './interfaces';

// calendar
const Calendar: FC<ICalendar> = ({
  setYear,
  today,
  year,
}) => {
  const size = 120;

  // create months
  const createMonths = useCallback(() => {
    const months = [];
    const total: number = 12;

    for (let i = 1; i <= total; i++) {
      months.push(<MonthRadius
        month={i}
        radius={size + (i * 20)}
        today={today}
        year={year}
        key={i} />);
    }

    return months;
  }, [ size, today, year ]);

  // render
  return (
    <Layer
      height={window.innerHeight}
      width={window.innerWidth}>
      {createMonths()}

      <MoonToday
        today={today}
        year={year}
        setYear={setYear} />
      
      <YearControls
        setYear={setYear}
        year={year} />
    </Layer>
  );
};

export default Calendar;