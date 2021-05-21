import { parse, format } from 'date-fns';
import React, { FC } from 'react';
import { Text } from 'react-konva';
import UseMoon from '../../../uses/useMoon';

import { IMoonTodayInfo } from './interfaces';
import MoonTodayInfoTop from './MoonTodayInfoTop';

// moon today info
const MoonTodayInfo: FC<IMoonTodayInfo> = ({
  today
}) => {
  const { moonPhaseName } = UseMoon();
  const date = parse(today, 'yyyy-MM-dd', new Date());

  const x: number = (window.innerWidth / 2);
  const y: number = (window.innerHeight / 2);

  // render
  return (
    <>
      <MoonTodayInfoTop
        date={date}
        x={x}
        y={y} />

      <Text
        align="center"
        fill="white"
        fontSize={10}
        fontFamily="Roboto Condensed"
        width={140}
        x={(window.innerWidth / 2) - (140 / 2)}
        y={(window.innerHeight / 2) + 70}
        text={moonPhaseName(date.getFullYear(), date.getMonth(), date.getDate())} />

      <Text
        align="center"
        fontFamily="Roboto Slab"
        fontSize={16}
        fill="white"
        fontStyle="bold"
        text={format(date, 'yyyy')}
        width={80}
        x={(window.innerWidth / 2) - 40}
        y={(window.innerHeight / 2) + 90} />
    </>
  );
};

export default MoonTodayInfo;