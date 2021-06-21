import React, { FC } from 'react';
import { Line, Rect } from 'react-konva';

import { IIconArrow } from './interfaces';

// icon arrow
const IconArrow: FC<IIconArrow> = ({
  color,
  type,
  x,
  y
}) => {
  // render
  return (
    <>
      <Rect
        fill="transparent"
        height={30}
        scaleX={type === "right" ? -1 : 1}
        x={x + (type === "right" ? 3 : -3)}
        y={y - (15 / 2)}
        width={30} />

      <Line
        closed={true}
        lineCap="round"
        lineJoin="round"
        listening={false}
        fill={color}
        scaleX={type === "right" ? -1 : 1}
        points={[21.3, 6.4, 2.4, 6.4, 7.5, 1.4, 6.8, 0.6, 1, 6.4, 1, 6.4, 1, 6.4, 0.5, 6.9, 1, 7.3, 1, 7.4, 1, 7.4, 6.8, 13.1, 7.5, 12.4, 2.4, 7.4, 21.3, 7.4]}
        strokeWidth={1}
        x={x}
        y={y} />
    </>
  );
};

export default IconArrow;