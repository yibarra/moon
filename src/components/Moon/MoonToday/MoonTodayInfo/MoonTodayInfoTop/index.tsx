import { compareAsc, format, parse } from 'date-fns';
import React, { FC } from 'react';

import Text from '../../../../Typography/Text';

// moon today info top
const MoonTodayInfoTop: FC<any> = ({
  date,
  theme,
  x,
  y
}) => {
  const offSetY = 80;

  // render
  return (
    <>
      <Text
        fill={theme.main}
        fontSize={8}
        text={compareAsc(date, parse(format(new Date(), 'yyyy/M/dd'), 'yyyy/M/dd', new Date())) === 0 ? 'TODAY' : 'Day of Week'}
        width={90} 
        x={x - (90 / 2)}
        y={y - offSetY} />

      <Text
        fill={theme.main}
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