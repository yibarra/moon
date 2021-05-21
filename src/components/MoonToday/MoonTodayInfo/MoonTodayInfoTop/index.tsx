import { format } from 'date-fns';
import React, { FC } from 'react';
import { Text } from 'react-konva';

// moon today info top
const MoonTodayInfoTop: FC<any> = ({
  date,
  x,
  y
}) => {
  // render
  return (
    <>
      <Text
        align="center"
        fill="white"
        fontFamily="Roboto Condensed"
        fontSize={12}
        text="TODAY"
        width={90} 
        x={x - (90 / 2)}
        y={y - 100} />

      <Text
        align="center"
        fill="white"
        fontFamily="Roboto Condensed"
        fontSize={10}
        text={format(date, 'EEEE')}
        width={90} 
        x={x - (90 / 2)}
        y={y - 85} /> 
    </>
  );
};

export default MoonTodayInfoTop;