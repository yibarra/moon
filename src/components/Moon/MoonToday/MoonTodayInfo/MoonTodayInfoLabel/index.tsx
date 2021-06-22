import React, { FC } from 'react';

import UseFormat from '../../../../../uses/useFormat';

import Text from '../../../../Typography/Text';

// moon today info year
const MoonTodayInfoLabel: FC<any> = ({
  offSetY,
  label,
  theme,
  value,
  x,
  y
}) => {
  const { convertToRoman } = UseFormat();

  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={8}
        width={140}
        x={x - (140 / 2)}
        y={y + offSetY}
        text={label} />

      <Text
        fill={theme.second}
        fontSize={10}
        fontStyle="bold"
        width={140}
        x={x - (140 / 2)}
        y={y + (offSetY + 10)}
        text={convertToRoman(value)} />
    </>
  );
};

export default MoonTodayInfoLabel;