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
    <Circle
      dash={[ 1, 4 ]}
      fill="transparent"
      listening={false}
      radius={radius}
      stroke={hexRgb(theme.second, { alpha: 0.5, format: 'css' })}
      x={size.width / 2}
      y={size.height / 2}
      strokeWidth={0.5} />
  );
};

export default MoonTodayBackground;