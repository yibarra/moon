import React, { FC, useCallback } from 'react';
import { Group } from 'react-konva';

import ButtonArrow from '../Form/ButtonArrow';

import { IYearControls } from './interfaces';

// year controls
const YearControls: FC<IYearControls> = ({
  lang,
  theme,
  radius,
  year,
  setYear,
  x,
  y
}) => {
  const offSetX = 140;

  // on change
  const onChange = useCallback((year: number) =>
    setYear(new Date(`${year}/1/1`)), [ setYear ]);

  // render
  return (
    <Group
      rotation={90}
      offsetX={x}
      offsetY={y}
      x={x}
      y={y}>
      <ButtonArrow
        color={theme.second}
        lang={lang}
        onClick={() => onChange(year-1)}
        text={(year - 1).toString()}
        type="left"
        x={x - (radius + offSetX)}
        y={y - 5} />

      <ButtonArrow
        color={theme.second}
        lang={lang}
        onClick={() => onChange(year+1)}
        text={(year + 1).toString()}
        type="right"
        x={x + (radius + offSetX)}
        y={y - 5} />
    </Group>
  );
};

export default YearControls;