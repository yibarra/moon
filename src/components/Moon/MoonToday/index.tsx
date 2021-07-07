import React, { FC } from 'react';

import MoonPhase from '../MoonPhase';
import MoonTodayBackground from './MoonTodayBackground';
import MoonTodayControls from './MoonTodayControls';
import MoonTodayInfo from './MoonTodayInfo';

import { IMoonToday } from './interfaces';

// moon today
const MoonToday: FC<IMoonToday> = ({
  lang,
  setToday,
  setPos,
  radius,
  theme,
  today,
  x,
  y
}) => {
  // render
  return (
    <>
      <MoonTodayBackground
        radius={radius}
        setPos={setPos}
        theme={theme}
        x={x}
        y={y} />

      <MoonTodayInfo
        lang={lang}
        theme={theme} 
        today={today}
        x={x}
        y={y} />

      <MoonPhase
        active={true}
        day={today.getDate()}
        delay={900}
        month={today.getMonth()}
        size={32}
        strokeWidth={1}
        theme={theme}
        x={x}
        y={y}
        year={today.getFullYear()} />

      <MoonTodayControls
        lang={lang}
        setYear={setToday}
        theme={theme}
        x={x}
        y={y}
        year={today.getFullYear()} />  
    </>
  );
};

export default MoonToday;