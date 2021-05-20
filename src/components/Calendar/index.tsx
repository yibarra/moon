import React, { FC, useCallback } from 'react';
import { Layer } from 'react-konva';

import MonthRadius from '../MonthRadius';

import { ICalendar } from './interfaces';

// options
const options: any = {
  lang: 'en',
  size: 100,
  lightColor: "#FFFF88",
  shadeColor: "black",
  texturize: false
};

// calendar
const Calendar: FC<ICalendar> = ({ 
  year
}) => {
  // get options
  const getOptions = useCallback((month: number, year: number) => {
    const obj = { month, year, ...options };
    const gets = [];

    for (var i in obj) {
      gets.push(`${i}=${encodeURIComponent(obj[i])}`)
    }

    return gets.join('&');
  }, []);

  // create months
  const createMonths = useCallback(() => {
    const months = [];
    const total: number = 12;

    for (let i = 1; i <= total; i++) {
      months.push(<MonthRadius
        radius={360 - (i * 20)}
        params={getOptions(i, year)}
        month={i}
        year={year}
        key={i} />);
    }

    return months;
  }, [ year, getOptions ]);

  // render
  return (
    <Layer
      height={window.innerHeight}
      width={window.innerWidth}>
      {createMonths()}
    </Layer>
  );
};

export default Calendar;