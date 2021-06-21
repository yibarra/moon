import { format } from 'date-fns';
import React, { FC } from 'react';
import { Text } from 'react-konva';
import UseMoon from '../../../uses/useMoon';

import MoonTodayInfoTop from './MoonTodayInfoTop';

import { IMoonTodayInfo } from './interfaces';

// moon today info
const MoonTodayInfo: FC<IMoonTodayInfo> = ({
  theme,
  today,
}) => {
  const { getMoonPhaseName } = UseMoon();

  const x: number = (window.innerWidth / 2);
  const y: number = (window.innerHeight / 2);

  // render
  return (
    <>
      <MoonTodayInfoTop
        date={today}
        x={x}
        y={y} />

      <Text
        listening={false}
        align="center"
        fill={theme.main}
        fontSize={10}
        fontFamily="Roboto Condensed"
        width={140}
        x={(window.innerWidth / 2) - (140 / 2)}
        y={(window.innerHeight / 2) + 70}
        text={getMoonPhaseName(today.getFullYear(), today.getMonth(), today.getDate())} />

      <Text
        listening={false}
        align="center"
        fontFamily="Roboto Slab"
        fontSize={12}
        fill={theme.main}
        fontStyle="bold"
        text={format(today, 'yyyy')}
        width={80}
        x={(window.innerWidth / 2) - 40}
        y={(window.innerHeight / 2) + 90} />
    </>
  );
};

export default MoonTodayInfo;