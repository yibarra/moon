import React, { FC } from 'react';

import MoonPhase from '../MoonPhase';
import MoonTodayBackground from './MoonTodayBackground';
import MoonTodayControls from './MoonTodayControls';
import MoonTodayInfo from './MoonTodayInfo';

import { IMoonToday } from './interfaces';

// moon today
const MoonToday: FC<IMoonToday> = ({
  setToday,
  setPos,
  size,
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
        size={size}
        setPos={setPos}
        theme={theme}
        x={x}
        y={y} />

      <MoonTodayInfo
        theme={theme} 
        today={today}
        x={x}
        y={y} />

      <MoonPhase
        active={false}
        day={today.getDate()}
        delay={600}
        month={today.getMonth()}
        size={32}
        strokeWidth={1}
        theme={theme}
        x={x}
        y={y}
        year={today.getFullYear()} />

      <MoonTodayControls
        size={size}
        setYear={setToday}
        theme={theme}
        x={x}
        y={y}
        year={today.getFullYear()} />  
    </>
  );
};

export default MoonToday;