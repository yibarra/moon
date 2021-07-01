import React, { FC, useEffect, useRef } from 'react';
import { Text, Transformer } from 'react-konva';

const CalendarDaysItem: FC<any> = ({
  angle,
  currentDay,
  day,
  glyphs,
  radius,
  rotation,
  theme,
  x,
  y
}) => {
  const TextRef: any = useRef();

  // render
  return (
    <>
      <Text
        ref={TextRef}
        fill={theme.second}
        fontSize={12}
        align="center"
        fontFamily="MayanNumerals"
        fontStyle="bold"
        offsetX={15}
        offsetY={15}
        wrap="char"
        text={glyphs.join('\n')}
        rotation={(day * angle) - rotation}
        verticalAlign="middle"
        height={30}
        width={30}
        x={x}
        y={y}
      />
    </>
  );
};

export default CalendarDaysItem;