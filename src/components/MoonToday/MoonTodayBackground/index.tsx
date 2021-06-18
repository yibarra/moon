import React, { FC } from 'react';
import { Circle } from 'react-konva';
import hexRgb from 'hex-rgb';

import { IMoonTodayBackground } from './interfaces';

// moon today background
const MoonTodayBackground: FC<IMoonTodayBackground> = ({
  radius,
  theme,
  size
}) => {
  // render
  return (
    <>
      <Circle
        x={size.width / 2}
        y={size.height / 2}
        radius={radius}
        fill={theme.second}
        stroke={hexRgb(theme.main, { alpha: 0.6, format: 'css' })}
        dash={[ 2, 2 ]}
        strokeWidth={1} /> 
    </>
  );
};

export default MoonTodayBackground;