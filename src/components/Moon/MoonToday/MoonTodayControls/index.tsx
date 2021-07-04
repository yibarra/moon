import React, { FC, useCallback } from 'react';

import ButtonArrow from '../../../Form/ButtonArrow';

import { IMoonTodayControls } from './interfaces';

// moon today controls
const MoonTodayControls: FC<IMoonTodayControls> = ({
  lang,
  setYear,
  theme,
  x,
  y,
  year,
}) => {
  // on change
  const onChange = useCallback((year: number) =>
    setYear(new Date(`${year}/1/1`)), [ setYear ]);

  // render
  return (
    <>
      <ButtonArrow
        color={theme.second}
        lang={lang}
        onClick={() => onChange(year-1)}
        type="left"
        x={x - 70}
        y={y - 6} />

      <ButtonArrow
        color={theme.second}
        lang={lang}
        onClick={() => onChange(year+1)}
        type="right"
        x={x + 70}
        y={y - 6} />
    </>
  );
};

export default MoonTodayControls;