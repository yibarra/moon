import { compareAsc, format, parse } from 'date-fns';
import React, { FC } from 'react';

import Text from '../../../../Typography/Text';

import { IMoonTodayInfoTop } from './interfaces';

// moon today info top
const MoonTodayInfoTop: FC<IMoonTodayInfoTop> = ({
  date,
  theme,
  x,
  y
}) => {
  const offSetY = 75;

  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={8}
        text={compareAsc(date, parse(format(new Date(), 'yyyy/M/dd'), 'yyyy/M/dd', new Date())) === 0 ? 'TODAY' : 'Day of Week'}
        width={90} 
        x={x - (90 / 2)}
        y={y - offSetY} />

      <Text
        fill={theme.second}
        fontSize={11}
        fontStyle="bold"
        text={format(date, 'EEEE')}
        width={90} 
        x={x - (90 / 2)}
        y={y - (offSetY - 10)} /> 
    </>
  );
};

export default MoonTodayInfoTop;