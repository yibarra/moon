import format from 'date-fns/format';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import MoonTodayInfoLabel from './MoonTodayInfoLabel';
import MoonTodayInfoTop from './MoonTodayInfoTop';
import MoonTodayInfoYear from './MoonTodayInfoYear';

import { IMoonTodayInfo } from './interfaces';

// moon today info
const MoonTodayInfo: FC<IMoonTodayInfo> = ({
  theme,
  today,
  x,
  y
}) => {
  const { t }: any = useTranslation();

  // render
  return (
    <>
      <MoonTodayInfoTop
        date={today}
        theme={theme}
        x={x}
        y={y} />

      <MoonTodayInfoLabel
        theme={theme}
        offSetY={30}
        x={x - 55}
        label={t('date.day')}
        value={parseInt(format(today, 'dd'))}
        y={y} />
      
      <MoonTodayInfoLabel
        theme={theme}
        offSetY={30}
        x={x + 55}
        label={t('date.month')}
        value={parseInt(format(today, 'M'))}
        y={y} />

      <MoonTodayInfoYear 
        theme={theme}
        today={today}
        x={x}
        y={y} />
    </>
  );
};

export default MoonTodayInfo;