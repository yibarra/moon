import React, { FC, useCallback } from 'react';
import UseFormat from '../../uses/useFormat';

import ButtonArrow from '../Form/ButtonArrow';

import { IYearControls } from './interfaces';

// year controls
const YearControls: FC<IYearControls> = ({
  theme,
  radius,
  year,
  setYear
}) => {
  const x = (window.innerWidth / 2);
  const y = (window.innerHeight / 2) - 8;

  const { convertToRoman } = UseFormat();

  // on change
  const onChange = useCallback((year: number) =>
    setYear(new Date(`${year}/1/1`)), [ setYear ]);

  // render
  return (
    <>
      <ButtonArrow
        color={theme.second}
        onClick={() => onChange(year-1)}
        text={convertToRoman(year - 1)}
        type="left"
        x={x - (radius + 110)}
        y={y + 2} />

      <ButtonArrow
        color={theme.second}
        onClick={() => onChange(year+1)}
        text={convertToRoman(year + 1)}
        type="right"
        x={x + (radius + 110)}
        y={y + 2} />
    </>
  );
};

export default YearControls;