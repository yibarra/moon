import React, { FC } from 'react';
import { Text } from 'react-konva';

const CalendarDaysItem: FC<any> = ({
  angle,
  day,
  glyphs,
  rotate,
  theme,
  x,
  y
}) => {
  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={12}
        align="center"
        fontFamily="MayanNumerals"
        fontStyle="bold"
        offsetX={15}
        offsetY={glyphs.length > 1 ? 12 : 5}
        wrap="char"
        text={glyphs[0]}
        rotation={(day * angle) - rotate}
        verticalAlign="middle"
        height={10}
        width={30}
        x={x}
        y={y} />

      {glyphs.length > 1 && <Text
        fill={theme.second}
        fontSize={12}
        align="center"
        fontFamily="MayanNumerals"
        fontStyle="bold"
        offsetX={15}
        offsetY={5}
        wrap="char"
        text={glyphs[1]}
        rotation={(day * angle) - rotate}
        verticalAlign="middle"
        height={10}
        width={30}
        x={x}
        y={y} />}
    </>
  );
};

export default CalendarDaysItem;