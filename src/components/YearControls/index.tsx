import React, { FC, useCallback } from 'react';

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

  // on change
  const onChange = useCallback((year: number) =>
    setYear(new Date(`${year}/1/1`)), [ setYear ]);

  // render
  return (
    <>
      <ButtonArrow
        color={theme.main}
        onClick={() => onChange(year-1)}
        text={(year - 1).toString()}
        type="left"
        x={x - (radius + 110)}
        y={y} />

      <ButtonArrow
        color={theme.main}
        onClick={() => onChange(year+1)}
        text={(year + 1).toString()}
        type="right"
        x={x + (radius + 110)}
        y={y} />
    </>
  );
};

export default YearControls;