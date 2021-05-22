import React, { FC } from 'react';
import { Group, Text } from 'react-konva';

import { IMonthRadiusName } from './interfaces';

// month radius name
const MonthRadiusName: FC<IMonthRadiusName> = ({
  radius,
  text,
}) => {
  // render
  return (
    <Group
      rotation={-2}>
      <Text 
        align="center"
        fill="white"
        fontFamily="Roboto Condensed"
        fontSize={10}
        rotation={-270}
        text={text?.substring(0, 3)}
        x={radius + 5}
        y={-30}
        width={20} />
    </Group>
  );
};

export default MonthRadiusName;