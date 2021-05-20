import axios from 'axios';
import { parse, format, getDaysInMonth } from 'date-fns';
import React, { FC, useCallback } from 'react';
import { Group, Text } from 'react-konva';
import useSWR from 'swr';

import MoonPhase from '../MoonPhase';
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
  const date = parse(format(new Date(), 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date());
  const current = parse(`${year}-${month}`, 'yyyy-MM', new Date());
  const active: boolean = date.getMonth() >= current.getMonth();

  const day = getDaysInMonth(current);
  const dayCurrent = date.getDate();
  const angle = (2 * Math.PI) / 33; // angle

  console.log((dayCurrent / 33) * 100);

  // data
  const { data }: any = 
    useSWR(`https://www.icalendar37.net/lunar/api/?${params}`, fetcher);

  // factory phases
  const factoryPhases = useCallback((data: any) => {
    if (!Object.keys(data).length) return [];
    return Object.entries(data).map(([key, value]) => value);
  }, []);

  // month
  return (
    <Group
      x={(window.innerWidth / 2)}
      y={(window.innerHeight / 2)}
      height={radius}
      width={radius}>
      <Text 
        text={data?.monthName.substring(0, 3).toUpperCase()}
        fontFamily="Roboto Condensed"
        align="center"
        fontSize={10}
        x={radius + 4}
        y={-30}
        rotation={-270}
        fill="white" />

      <MonthRadiusPercent
        active={active}
        radius={radius}
        percent={active === true ? ((day / 33) * 100) - (Math.PI / 2) : 2} />

      {data?.phase && <Group>
        {factoryPhases(data?.phase).map((item: any, index: number) =>
          <MoonPhase
            angle={angle * index}
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