import React, { FC } from 'react';
import { Circle, Group } from 'react-konva';

import { IMonthRadiusPercent } from './interfaces';

// month radius percent
const MonthRadiusPercent: FC<IMonthRadiusPercent> = ({
  active,
  radius,
  percent
}) => {
  const circumference = 2 * Math.PI * radius; // circumference

  // render
  return (
    <Group>
      <Circle
        radius={radius}
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth={1}
        dash={[2, 4]}
        x={0}
        y={0} />

      <Circle
        dash={[ percent/100 * circumference, circumference ]}
        radius={radius}
        fill="transparent"
        stroke={active === true ? 'white' : 'transparent'}
        strokeWidth={1} />
    </Group>
  );
};

export default MonthRadiusPercent;