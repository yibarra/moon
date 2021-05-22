import React, { FC } from 'react';

import ButtonArrow from '../ButtonArrow';

import { IYearControls } from './interfaces';

// year controls
const YearControls: FC<IYearControls> = ({
  radius,
  year,
  setYear
}) => {
  const x = (window.innerWidth / 2);
  const y = (window.innerHeight / 2) - 8;

  // render
  return (
    <>
      <ButtonArrow
        onClick={() => setYear(year-1)}
        text={(year - 1).toString()}
        type="left"
        x={x - (radius + 110)}
        y={y} />

      <ButtonArrow
        onClick={() => setYear(year+1)}
        text={(year + 1).toString()}
        type="right"
        x={x + (radius + 110)}
        y={y} />
    </>
  );
};

export default YearControls;