import React, { FC } from 'react';

import MoonPhase from '../MoonPhase';
import MoonTodayBackground from './MoonTodayBackground';
import MoonTodayControls from './MoonTodayControls';
import MoonTodayInfo from './MoonTodayInfo';

import { IMoonToday } from './interfaces';

// moon today
const MoonToday: FC<IMoonToday> = ({
  setToday,
  size,
  radius,
  theme,
  today,
}) => {
  // render
  return (
    <>
      <MoonTodayBackground
        radius={radius}
        size={size} 
        theme={theme} />

      <MoonTodayInfo
        today={today}
        theme={theme} />

      <MoonPhase
        day={today.getDate()}
        delay={600}
        month={today.getMonth()}
        size={32}
        strokeWidth={1}
        theme={theme}
        x={size.width / 2}
        y={size.height / 2}
        year={today.getFullYear()} />

      <MoonTodayControls
        size={size}
        setYear={setToday}
        theme={theme}
        year={today.getFullYear()} />  
    </>
  );
};

export default MoonToday;