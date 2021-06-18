import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';

import Month from '../Month';
import MoonToday from '../MoonToday';
import YearControls from '../YearControls';

import { ICalendar } from './interfaces';

const increment = 20;
const radius = 120;

// calendar
const Calendar: FC<ICalendar> = ({
  setToday,
  size,
  theme,
  today,
}) => {
  // create months
  const createMonths = useCallback(() => {
    const months = [];
    const total: number = 12;

    for (let i = 1; i <= total; i++) {
      months.push(<Month
        month={i}
        radius={radius + (i * increment)}
        today={today}
        theme={theme}
        setToday={setToday}
        key={i} />);
    }

    return months;
  }, [ size, setToday, theme, today ]);

  // render
  return (
    <Layer
      id="calendar"
      height={window.innerHeight}
      width={window.innerWidth}>
      {createMonths()}

      <MoonToday
        setToday={setToday}
        size={size}
        theme={theme}
        today={today} />

      <YearControls
        theme={theme}
        radius={radius + (12 * increment)}
        setYear={setToday}
        year={today.getFullYear()} />
    </Layer>
  );
};

export default Calendar;