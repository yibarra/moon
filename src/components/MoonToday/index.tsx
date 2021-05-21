import React, { FC } from 'react';
import { Circle, Group } from 'react-konva';

import MoonPhase from '../MoonPhase';
import MoonTodayControls from './MoonTodayControls';
import MoonTodayInfo from './MoonTodayInfo';

// moon today
const MoonToday: FC<any> = ({
  setYear,
  year,
}) => {

  // render
  return (
    <Group zIndex={99}>
      <MoonTodayInfo />

      <MoonTodayControls
        setYear={setYear}
        year={year} />

      <Circle
        x={window.innerWidth / 2}
        y={window.innerHeight / 2}
        radius={60}
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.2)"
        dash={[ 2, 4]}
        strokeWidth={1} />

      <Circle
        x={window.innerWidth / 2}
        y={window.innerHeight / 2}
        radius={115}
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.2)"
        dash={[ 2, 4]}
        strokeWidth={1} />

      <MoonPhase
        x={window.innerWidth / 2}
        y={window.innerHeight / 2}
        size={50}
        day={20}
        month={5}
        year={2021}
        strokeWidth={1}
        angle={0} />
    </Group>
  );
};

export default MoonToday;