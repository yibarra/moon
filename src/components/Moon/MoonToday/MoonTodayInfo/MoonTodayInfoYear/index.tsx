import format from 'date-fns/format';
import React, { FC } from 'react';
import UseFormat from '../../../../../uses/useFormat';

import UseMoon from '../../../../../uses/useMoon';

import Text from '../../../../Typography/Text';

import { IMoonTodayInfoYear } from './interfaces';

// moon today info year
const MoonTodayInfoYear: FC<IMoonTodayInfoYear> = ({
  theme,
  today
}) => {
  const { getMoonPhaseName } = UseMoon();
  const { convertToRoman } = UseFormat();

  const offSetY: number = 65;

  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={8}
        width={140}
        x={(window.innerWidth / 2) - (140 / 2)}
        y={(window.innerHeight / 2) + offSetY}
        text={getMoonPhaseName(today.getFullYear(), today.getMonth(), today.getDate())} /> 

      <Text
        fontSize={10}
        fill={theme.second}
        fontStyle="bold"
        text={convertToRoman(parseInt(format(today, 'yyyy')))}
        width={80}
        x={(window.innerWidth / 2) - 40}
        y={(window.innerHeight / 2) + (offSetY + 10)} />
    </>
  );
};

export default MoonTodayInfoYear;