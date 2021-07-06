import React, { FC } from 'react';
import { Text } from 'react-konva';

import { ICalendarDaysItem } from './interfaces';

// calendar days item
const CalendarDaysItem: FC<ICalendarDaysItem> = ({
  active,
  glyphs,
  theme,
  x,
  y
}) => {
  const props = {
    align: 'center',
    fontSize: 10,
    fill: active ? theme.main : theme.second,
    fontFamily: 'MayanNumerals',
    height: 10,
    listening: false,
    offsetX: 15,
    wrap: 'char',
    rotation: 0,
    verticalAlign: 'middle',
    width: 30,
    x,
    y
  };

  // render
  return (
    <>
      <Text
        {...props}
        offsetY={glyphs.length > 1 ? 12 : 5}
        text={glyphs[0]} />

      {glyphs.length > 1 && <Text
        {...props}
        offsetY={5}
        text={glyphs[1]} />}
    </>
  );
};

export default CalendarDaysItem;