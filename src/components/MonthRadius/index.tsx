import axios from 'axios';
import { parse, format, getDaysInMonth } from 'date-fns';
import React, { FC, useCallback } from 'react';
import { Group } from 'react-konva';
import useSWR from 'swr';

import MoonPhase from '../MoonPhase';
import MonthRadiusName from './MonthRadiusName';
import MonthRadiusPercent from './MonthRadiusPercent';

import { IMonthRadius } from './interfaces';

// fetcher
const fetcher = (url: string) => axios.get(url).then(res => res.data);

// month radius
const MonthRadius: FC<IMonthRadius> = ({
  month,
  params,
  radius,
  year
}) => {
  // data
  const { data }: any = 
    useSWR(`https://www.icalendar37.net/lunar/api/?${params}`, fetcher);

  const date = parse(format(new Date(), 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date());
  const current = parse(`${year}-${month}-${date.getDate()}`, 'yyyy-MM-dd', new Date());

  const active: boolean = date.getMonth() >= current.getMonth(); // active month
  const currentMonth: boolean = date.getMonth() === current.getMonth(); // current month

  const day = getDaysInMonth(current); // day
  const angle = (2 * Math.PI) / 32; // angle

  // factory phases
  const factoryPhases = useCallback((data: any) => {
    if (!Object.keys(data).length) return [];
    return Object.entries(data).map(([key, value]) => value);
  }, []);

  // percent
  const percent = useCallback(() => {
    if (active === true) {
      if (currentMonth === true) {
        return Math.floor((date.getDate() / 32) * 100) - ((Math.PI / 2) + 1.1);
      }

      return Math.ceil((day / 32) * 100) - ((Math.PI + 0.4));
    }

    return 0;
  }, [ active, currentMonth, date, day ]);

  // select day
  const selectDay = useCallback((day: number) => {
    if (currentMonth === true) {
      if (day === date.getDate()) {
        return 4;
      }
    }

    return 1;
  }, [ currentMonth, date ]);

  // month
  return (
    <Group
      x={(window.innerWidth / 2)}
      y={(window.innerHeight / 2)}
      height={radius}
      width={radius}>
      {data?.phase && <Group>
        <MonthRadiusName
          angle={angle * month}
          month={month}
          radius={radius}
          text={data?.monthName} />

        <MonthRadiusPercent
          angle={angle}
          active={active}
          day={day}
          radius={radius}
          percent={percent()} />

        {factoryPhases(data?.phase).map((item: any, index: number) =>
          <MoonPhase
            angle={angle * index}
            strokeWidth={selectDay(index + 1)}
            day={index + 1}
            month={month}
            phase={item}
            size={4}
            x={Math.cos(angle * index) * radius}
            y={Math.sin(angle * index) * radius}
            year={year}
            key={index} />)}
      </Group>}
    </Group>
  );
};

export default MonthRadius;