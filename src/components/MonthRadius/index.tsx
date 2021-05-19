import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { Circle, Group, Text } from 'react-konva';
import useSWR from 'swr';
import MoonPhase from '../MoonPhase';

import { IMonthRadius } from './interfaces';

// fetcher
const fetcher = (url: string) => axios.get(url).then(res => res.data);

// month radius
const MonthRadius: FC<IMonthRadius> = ({
  month,
  params,
  year
}) => {
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
    <Group x={20}>
      <Text text={data?.monthName} fontSize={15} y={50 * month} />

      <Circle
        radius={300 * month}
        fill="transparent"
        stroke="#222"
        strokeWidth={2}
        x={0}
        y={0} />

      {data?.phase && <Group>
        {factoryPhases(data?.phase).map((item: any, index: number) =>
          <MoonPhase
            day={index + 1}
            phase={item}
            x={index * 25}
            y={70 * month}
            year={year}
            month={month}
            size={7}
            key={index} />)}
      </Group>}
    </Group>
  );
};

export default MonthRadius;