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
        dash={[ 2, 2 ]}
        fill={theme.second}
        listening={false}
        radius={radius}
        stroke={hexRgb(theme.main, { alpha: 0.1, format: 'css' })}
        x={size.width / 2}
        y={size.height / 2}
        strokeWidth={1} /> 
    </>
  );
};

export default MoonTodayBackground;