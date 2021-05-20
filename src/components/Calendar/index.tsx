import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';

import MonthRadius from '../MonthRadius';
import MoonToday from '../MoonToday';
import YearControls from '../YearControls';

import { ICalendar } from './interfaces';

// calendar
const Calendar: FC<ICalendar> = ({ 
  setYear,
  year,
}) => {
  // create months
  const createMonths = useCallback(() => {
    const months = [];
    const total: number = 12;

    for (let i = 1; i <= total; i++) {
      months.push(<MonthRadius
        radius={360 - (i * 20)}
        month={i}
        year={year}
        key={i} />);
    }

    return months;
  }, [ year ]);

  // render
  return (
    <Layer
      height={window.innerHeight}
      width={window.innerWidth}>
      {createMonths()}

      <MoonToday />
      <YearControls
        setYear={setYear}
        year={year} />
    </Layer>
  );
};

export default Calendar;