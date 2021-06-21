import React, { FC } from 'react';

import MoonPhase from '../Moon/MoonPhase';
import MoonTodayBackground from './MoonTodayBackground';
import MoonTodayControls from './MoonTodayControls';
import MoonTodayInfo from './MoonTodayInfo';

import { IMoonToday } from './interfaces';

// moon today
const MoonToday: FC<IMoonToday> = ({
  setToday,
  size,
  theme,
  today,
}) => {
  // render
  return (
    <>
      <MoonTodayBackground
        radius={32 * 3.5}
        size={size} 
        theme={theme} />

      <MoonTodayInfo
        today={today}
        theme={theme} />

      <MoonPhase
        bg={true}
        day={today.getDate()}
        dashed={[1, 2]}
        delay={today.getDate() * 100}
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