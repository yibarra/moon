import { compareAsc, format, parse } from 'date-fns';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../../../Typography/Text';

import { IMoonTodayInfoTop } from './interfaces';

// moon today info top
const MoonTodayInfoTop: FC<IMoonTodayInfoTop> = ({
  date,
  theme,
  x,
  y
}) => {
  const { t }: any = useTranslation();
  
  const offSetY = 75;

  // today
  const today: number = compareAsc(date,
    parse(format(new Date(), 'yyyy/M/dd'), 'yyyy/M/dd', new Date()));

  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={8}
        text={today === 0 ? t('week.today') : t('week.day')}
        width={90} 
        x={x - (90 / 2)}
        y={y - offSetY} />

      <Text
        fill={theme.second}
        fontSize={11}
        fontStyle="normal"
        text={t(`week.${format(date, 'EEE').toLowerCase()}`)}
        width={120} 
        x={x - (120 / 2)}
        y={y - (offSetY - 10)} /> 
    </>
  );
};

export default MoonTodayInfoTop;