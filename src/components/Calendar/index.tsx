import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';
import UseFormat from '../../uses/useFormat';

import Month from '../Month';
import MoonToday from '../MoonToday';
import YearControls from '../YearControls';
import CalendarDays from './CalendarDays';

import { ICalendar } from './interfaces';

const increment = 20;
const radius = 120;

const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// calendar
const Calendar: FC<ICalendar> = ({
  setToday,
  size,
  theme,
  today,
}) => {
  const { toRadians } = UseFormat();
  const angle: number = toRadians(360 / REACT_APP_TOTAL_ITEMS_DEGREE);

  // create months
  const createMonths = useCallback(() => {
    const months = [];
    const total: number = 12;

    for (let i = 1; i <= total; i++) {
      months.push(<Month
        month={i}
        radius={radius + (i * increment)}
        size={size}
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
      height={size.height}
      width={size.width}>
      {createMonths()}
      
      <CalendarDays
        angle={angle}
        day={today.getDate()}
        radius={390}
        theme={theme}
        x={size.width / 2}
        y={size.height / 2} />

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