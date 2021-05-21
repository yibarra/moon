import React, { FC } from 'react';

import ButtonArrow from '../ButtonArrow';

import { IYearControls } from './interfaces';

// year controls
const YearControls: FC<IYearControls> = ({
  year,
  setYear
}) => {
  // render
  return (
    <>
      <ButtonArrow
        onClick={() => setYear(year-1)}
        text={(year - 1).toString()}
        type="left"
        x={90}
        y={window.innerHeight / 2} />

      <ButtonArrow
        onClick={() => setYear(year+1)}
        text={(year + 1).toString()}
        type="right"
        x={window.innerWidth - 90}
        y={window.innerHeight / 2} />
    </>
  );
};

export default YearControls;