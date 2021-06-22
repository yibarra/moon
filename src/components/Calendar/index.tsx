import React, { FC, useCallback } from 'react';

import { Layer } from 'react-konva';
import UseFormat from '../../uses/useFormat';

import CalendarDays from './CalendarDays';
import Month from '../Month';
import MoonToday from '../Moon/MoonToday';
import YearControls from '../YearControls';

import { ICalendar } from './interfaces';

const increment = 20;
const radius = 90;

const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// calendar
const Calendar: FC<ICalendar> = ({
  setToday,
  size,
  theme,
  today,
}) => {
  const { toRadians } = UseFormat(); // format funcs

  const angle: number = toRadians(360 / REACT_APP_TOTAL_ITEMS_DEGREE);
  const rotate: number = -(((today.getDate() - 1) / REACT_APP_TOTAL_ITEMS_DEGREE) * 360) - 90;

  // create months
  const createMonths = useCallback(() => {
    const months = [];
    const total: number = 12;

    for (let i = 1; i <= total; i++) {
      months.push(<Month
        month={i}
        radius={radius + (i * increment)}
        rotate={rotate}
        size={size}
        today={today}
        theme={theme}
        setToday={setToday}
        key={i} />);
    }

    return months;
  }, [ rotate, size, setToday, theme, today ]);

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
        radius={radius + (13.5 * increment)}
        rotate={rotate}
        theme={theme}
        x={0}
        y={0} />

      <MoonToday
        setToday={setToday}
        size={size}
        theme={theme}
        today={today} />

      <YearControls
        theme={theme}
        radius={radius + (13 * increment)}
        setYear={setToday}
        year={today.getFullYear()} />
    </Layer>
  );
};

export default Calendar;