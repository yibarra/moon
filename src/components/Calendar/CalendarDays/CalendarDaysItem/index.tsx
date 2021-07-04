import React, { FC } from 'react';
import { Text } from 'react-konva';

const CalendarDaysItem: FC<any> = ({
  active,
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
        align="center"
        fontSize={12}
        fill={active ? theme.main : theme.second}
        fontFamily="MayanNumerals"
        fontStyle="bold"
        height={10}
        offsetX={15}
        offsetY={glyphs.length > 1 ? 12 : 5}
        wrap="char"
        text={glyphs[0]}
        rotation={(day * angle) - rotate}
        verticalAlign="middle"
        width={30}
        x={x}
        y={y} />

      {glyphs.length > 1 && <Text
        align="center"
        fill={active ? theme.main : theme.second}
        fontSize={12}
        fontFamily="MayanNumerals"
        height={10}
        fontStyle="bold"
        offsetX={15}
        offsetY={5}
        wrap="char"
        text={glyphs[1]}
        rotation={(day * angle) - rotate}
        verticalAlign="middle"
        width={30}
        x={x}
        y={y} />}
    </>
  );
};

export default CalendarDaysItem;