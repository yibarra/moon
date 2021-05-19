import React, { FC } from 'react';
import { Circle, Group } from 'react-konva';

import { IMonthRadiusPercent } from './interfaces';

// month radius percent
const MonthRadiusPercent: FC<IMonthRadiusPercent> = ({
  radius,
  percent
}) => {
  const circumference = 2 * Math.PI * radius;

  // render
  return (
    <Group>
      <Circle
        dash={[ percent/100 * circumference, circumference ]}
        radius={radius}
        fill="transparent"
        stroke="blue"
        strokeWidth={2} />
    </Group>
  );
};

export default MonthRadiusPercent;