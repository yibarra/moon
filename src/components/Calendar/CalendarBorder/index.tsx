import { Context } from 'konva/types/Context';
import React, { FC, useCallback } from 'react';
import { Shape } from 'react-konva';

import UseShapes from '../../../uses/useShape';

// calendar border
const CalenderBorder: FC<any> = ({
  radius,
  theme,
  x,
  y
}) => {
  const { createCircle } = UseShapes();

  // create circle
  const createBackground = useCallback((ctx: Context) => {
    createCircle(ctx, {
      'fillStyle': 'transparent',
      'lineWidth': 1,
      'strokeStyle': theme.second,
    }, radius + 39, 0, Math.PI * 2, true, x, y);

    createCircle(ctx, {
      'fillStyle': 'transparent',
      'lineWidth': 5,
      'strokeStyle': theme.second,
    }, radius + 35, 0, Math.PI * 2, true, x, y);
  }, [createCircle, radius, theme, x, y]);

  // render
  return (
    <Shape
      listening={false}
      sceneFunc={(ctx: Context) => createBackground(ctx)} />
  );
};

export default CalenderBorder;