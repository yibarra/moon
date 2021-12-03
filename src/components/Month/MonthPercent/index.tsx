import React, { FC, useCallback } from 'react';

import { Spring, animated as a } from '@react-spring/konva';
import { Circle } from 'react-konva';
import { Context } from 'konva/types/Context';

import { IMonthPercent } from './interfaces';

// month radius percent
const MonthPercent: FC<IMonthPercent> = ({
  animate,
  active,
  angle,
  day,
  month,
  radius,
  theme,
  today
}) => {
  // create mask
  const maskLines = useCallback((ctx: Context, total: number) => {
    if (active === true) {
      const value = Math.abs(angle * (day - 1));

      if (today.getMonth() > (month - 1)) {
        ctx.arc(0, 0, radius, 0, value, false);
      } else {
        if (day === today.getDate()) {
          ctx.arc(0, 0, radius, 0, total, false);
        } else {
          ctx.arc(0, 0, radius, value, total, false);
        }
      }
    }
  }, [active, angle, day, month, radius, today]);

  // render
  return (
    <Spring
      reset={animate}
      config={{
        duration: 600,
      }}
      from={{ total: 0 }}
      to={{ total: Math.abs(angle * (today.getDate() - 1)) }}>
      {(props: any) => (
        <a.Group
          clipFunc={(ctx: Context) => maskLines(ctx, props.total.to((n: any) => n).get())}
          listening={false}
          {...props}>
          <Circle
            dash={[2, 1]}
            fill="transparent"
            listening={false}
            radius={radius}
            stroke={theme.main}
            strokeWidth={1}
            listen={false} />
        </a.Group>)}
    </Spring>
  );
};

export default MonthPercent;