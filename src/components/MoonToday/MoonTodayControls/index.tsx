import React, { FC } from 'react';

import ButtonArrow from '../../ButtonArrow';

import { IMoonTodayControls } from './interfaces';

// moon today controls
const MoonTodayControls: FC<IMoonTodayControls> = ({
  setYear,
  year,
}) => {
  // render
  return (
    <>
      <ButtonArrow
        onClick={() => setYear(year-1)}
        type="left"
        x={(window.innerWidth / 2) - 95}
        y={(window.innerHeight / 2) - 5} />

      <ButtonArrow
        onClick={() => setYear(year+1)}
        type="right"
        x={(window.innerWidth / 2) + 95}
        y={(window.innerHeight / 2) - 5} />
    </>
  );
};

export default MoonTodayControls;