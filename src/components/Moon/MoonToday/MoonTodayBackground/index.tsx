import { KonvaEventObject } from 'konva/types/Node';
import React, { FC, useCallback } from 'react';
import { Circle } from 'react-konva';

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
  const onDragEnd = useCallback((event: KonvaEventObject<DragEvent>) => {
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
      fill="transparent"
      listening={true}
      draggable
      radius={radius}
      onDragMove={onDragEnd}
      stroke={theme.second}
      x={x}
      y={y}
      strokeWidth={0.5} />
  );
};

export default MoonTodayBackground;