import React, { FC } from 'react';
import { Circle } from 'react-konva';

import { IControlPosition } from './interfaces';

// moon today background
const ControlPosition: FC<IControlPosition> = ({
  radius,
  theme,
  x,
  y
}) => {
  // render
  return (
    <Circle
      fill="transparent"
      dash={[1, 2]}
      listening={false}
      radius={radius + 5}
      stroke={theme.second}
      strokeWidth={0.5}
      x={x}
      y={y} />
  );
};

export default ControlPosition;