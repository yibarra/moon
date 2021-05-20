import React, { FC } from 'react';
import { Text } from 'react-konva';

import { IYearControls } from './interfaces';

// year controls
const YearControls: FC<IYearControls> = ({
  year,
  setYear
}) => {
  // render
  return (
    <>
      <Text
        fill="white"
        onClick={() => setYear(year-1)}
        text={(year - 1).toString()}
        x={90}
        y={window.innerHeight / 2} />

      <Text
        fill="white"
        onClick={() => setYear(year+1)}
        text={(year + 1).toString()}
        x={window.innerWidth - 90}
        y={window.innerHeight / 2} />
    </>
  );
};

export default YearControls;