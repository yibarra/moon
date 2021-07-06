import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';

import UseFormat from '../../uses/useFormat';

import CalendarDays from './CalendarDays';
import Month from '../Month';
import MoonToday from '../Moon/MoonToday';
import YearControls from '../YearControls';

import { ICalendar } from './interfaces';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// calendar
const Calendar: FC<ICalendar> = ({
  lang,
  radius,
  scale,
  pos,
  size,
  setToday,
  setPos,
  theme,
  today,
}) => {
  const increment = radius * 0.16;
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
        rotate={rotate}
        radius={radius + (i * increment)}
        size={size}
        today={today}
        theme={theme}
        setToday={setToday}
        {...pos}
        key={i} />);
    }

    return months;
  }, [increment, radius, rotate, pos, size, setToday, theme, today]);

  // render
  return (
    <Layer
      id="calendar"
      scale={{ x: scale, y: scale }}>
      <YearControls
        lang={lang}
        theme={theme}
        radius={radius + (13 * increment)}
        setYear={setToday}
        year={today.getFullYear()}
        {...pos} />

      {createMonths()}

      <MoonToday
        lang={lang}
        setToday={setToday}
        setPos={setPos}
        radius={radius}
        theme={theme}
        today={today}
        {...pos} />

      <CalendarDays
        angle={angle}
        day={today.getDate()}
        lang={lang}
        radius={radius + (14 * increment)}
        rotate={rotate}
        theme={theme}
        {...pos} />
    </Layer>
  );
};

export default Calendar;