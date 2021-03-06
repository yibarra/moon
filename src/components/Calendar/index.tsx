import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';

import CalenderBorder from './CalendarBorder';
import CalendarDays from './CalendarDays';
import Month from '../Month';
import MoonToday from '../Moon/MoonToday';
import YearControls from '../YearControls';

import UseFormat from '../../uses/useFormat';

import { ICalendar } from './interfaces';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// calendar
const Calendar: FC<ICalendar> = ({
  animate,
  lang,
  radius,
  scale,
  pos,
  size,
  setToday,
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
        animate={animate}
        month={i}
        radius={radius + (i * increment)}
        size={size}
        today={today}
        theme={theme}
        setToday={setToday}
        {...pos}
        key={i} />);
    }

    return months;
  }, [ animate, increment, radius, pos, size, setToday, theme, today]);

  // render
  return (
    <Layer
      rotation={-90}
      scale={{ x: scale, y: scale }}
      offsetX={(size.width / 2)}
      offsetY={size.height / 2}
      {...pos}>

      <CalenderBorder
        radius={radius + (13 * increment)}
        theme={theme}
        {...pos} />

      <YearControls
        lang={lang}
        theme={theme}
        radius={radius + (13 * increment)}
        setYear={setToday}
        year={today.getFullYear()}
        {...pos} />

      {createMonths()}

      <CalendarDays
        angle={angle}
        animate={animate}
        day={today.getDate()}
        lang={lang}
        rotate={rotate}
        radius={radius + (14 * increment)}
        theme={theme}
        {...pos} />

      <MoonToday
        animate={animate}
        lang={lang}
        radius={radius}
        setToday={setToday}
        theme={theme}
        today={today}
        {...pos} />
    </Layer>
  );
};

export default Calendar;