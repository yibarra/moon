import React, { FC } from 'react';

import MoonTodayInfoTop from './MoonTodayInfoTop';
import MoonTodayInfoYear from './MoonTodayInfoYear';

import { IMoonTodayInfo } from './interfaces';
import MoonTodayInfoLabel from './MoonTodayInfoLabel';
import format from 'date-fns/format';

// moon today info
const MoonTodayInfo: FC<IMoonTodayInfo> = ({
  theme,
  today,
  x,
  y
}) => {
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
        label="Day"
        value={parseInt(format(today, 'dd'))}
        y={y} />
      
      <MoonTodayInfoLabel
        theme={theme}
        offSetY={30}
        x={x + 55}
        label="Month"
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