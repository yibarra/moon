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
  console.log(theme);


  // render
  return (
    <>
      <MoonTodayBackground
        radius={32 * 3.5}
        size={size} 
        theme={theme} />

      <MoonPhase
        day={today.getDate()}
        dashed={[2, 2]}
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