import React, { FC } from 'react';
import { Group, Text } from 'react-konva';

import { IMonthRadiusName } from './interfaces';

// month radius name
const MonthRadiusName: FC<IMonthRadiusName> = ({
  angle,
  radius,
  month,
  text,
}) => {
  // render
  return (
    <Group rotation={-18}>
      <Text 
        text={text?.substring(0, 3)}
        fontFamily="Roboto Condensed"
        align="center"
        fontSize={10}
        x={radius+5}
        y={-5}
        rotation={-270}
        fill="white" />
    </Group>
  );
};

export default MonthRadiusName;