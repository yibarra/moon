import React, { FC } from 'react';
import { Group } from 'react-konva';

import ButtonArrow from '../../ButtonArrow';

import { IMoonTodayControls } from './interfaces';

// moon today controls
const MoonTodayControls: FC<IMoonTodayControls> = ({
  setYear,
  year,
}) => {
  return (
    <Group zIndex={100}>
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
    </Group>
  );
};

export default MoonTodayControls;