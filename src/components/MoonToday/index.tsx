import React, { FC } from 'react';

import MoonPhase from '../MoonPhase';
import MoonTodayBackground from './MoonTodayBackground';
import MoonTodayControls from './MoonTodayControls';
import MoonTodayInfo from './MoonTodayInfo';

// moon today
const MoonToday: FC<any> = ({
  today,
  setYear,
  year,
}) => {
  // render
  return (
    <>
      <MoonTodayBackground />

      <MoonTodayInfo
        today={today} />

      <MoonPhase
        x={window.innerWidth / 2}
        y={window.innerHeight / 2}
        size={50}
        day={20}
        month={5}
        year={2021}
        strokeWidth={1}
        angle={0} />

      <MoonTodayControls
        setYear={setYear}
        year={year} />
    </>
  );
};

export default MoonToday;