import React, { FC, useCallback } from 'react';

import ButtonArrow from '../../Form/ButtonArrow';

import { IMoonTodayControls } from './interfaces';

// moon today controls
const MoonTodayControls: FC<IMoonTodayControls> = ({
  setYear,
  size,
  theme,
  year,
}) => {
  // on change
  const onChange = useCallback((year: number) =>
    setYear(new Date(`${year}/1/1`)), [ setYear ]);

  // render
  return (
    <>
      <ButtonArrow
        color={theme.main}
        onClick={() => onChange(year-1)}
        type="left"
        x={(size.width / 2) - 95}
        y={(size.height / 2) - 5} />

      <ButtonArrow
        color={theme.main}
        onClick={() => onChange(year+1)}
        type="right"
        x={(size.width / 2) + 95}
        y={(size.height / 2) - 5} />
    </>
  );
};

export default MoonTodayControls;