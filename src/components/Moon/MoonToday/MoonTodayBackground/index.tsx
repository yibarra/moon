import React, { FC, useCallback } from 'react';
import { Circle } from 'react-konva';
import hexRgb from 'hex-rgb';

import { IMoonTodayBackground } from './interfaces';

// moon today background
const MoonTodayBackground: FC<IMoonTodayBackground> = ({
  radius,
  theme,
  setPos,
  x,
  y
}) => {
  // on drag end
  const onDragEnd = useCallback((event: any) => {
    if (event instanceof Object === false) return false;

    try {
      const { x, y } = event.target.attrs;
      setPos({ x, y });
    } catch(e: any) {
      console.log('Error pos', e);
    }
  }, [ setPos ]);

  // render
  return (
    <Circle
      dash={[ 1, 4 ]}
      fill="transparent"
      listening={true}
      draggable
      radius={radius}
      onDragMove={onDragEnd}
      stroke={hexRgb(theme.second, { alpha: 0.5, format: 'css' })}
      x={x}
      y={y}
      strokeWidth={0.5} />
  );
};

export default MoonTodayBackground;