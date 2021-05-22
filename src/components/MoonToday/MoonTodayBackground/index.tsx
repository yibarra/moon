import React, { FC } from 'react';
import { Circle } from 'react-konva';

import { IMoonTodayBackground } from './interfaces';

// moon today background
const MoonTodayBackground: FC<IMoonTodayBackground> = () => {
  // render
  return (
    <>
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
        radius={120}
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.2)"
        dash={[ 2, 4]}
        strokeWidth={1} /> 
    </>
  );
};

export default MoonTodayBackground;