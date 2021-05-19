import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { Circle, Group, Text } from 'react-konva';
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
  const angle = (2 * Math.PI)/(33);

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
        radius={radius}
        percent={2} />

      <Circle
        radius={radius}
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth={1}
        dash={[2, 4]}
        x={0}
        y={0} />

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