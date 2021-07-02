import React, { FC } from 'react';
import { format } from 'date-fns';
import { Spring, animated } from '@react-spring/konva';

import MonthContainer from './MonthContainer';
import MonthName from './MonthName';
import MonthPercent from './MonthPercent';

import UseFormat from '../../uses/useFormat';

import { IMonth } from './interfaces';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// month radius
const Month: FC<IMonth> = ({
  month,
  radius,
  rotate,
  setToday,
  today,
  theme,
  x,
  y
}) => {
  const { fixDate, getActiveMonth } = UseFormat(); // fix date

  const angle = (2 * Math.PI) / (REACT_APP_TOTAL_ITEMS_DEGREE); // angle
  const current = fixDate(today.getFullYear(), month); // current

  const { active, currentMonth, day }: any = getActiveMonth(today, current);

  // month
  return (
    <Spring
      config={{
        duration: 450,
      }}
      delay={90 * (month - 1)}
      from={{ rotation: 0, x, y }}
      to={{ rotation: rotate, x, y }}>
      {props => (<animated.Group
        {...props}>
          <MonthPercent
            active={active}
            angle={angle}
            currentMonth={currentMonth}
            day={day}
            month={month}
            theme={theme}
            today={today}
            radius={radius} />

          <MonthName
            active={active}
            angle={angle}
            day={day}
            month={month}
            radius={radius}
            theme={theme}
            text={`months.${format(current, 'MMM').toLowerCase()}`} />

          <MonthContainer
            angle={angle}
            currentMonth={currentMonth}
            day={day}
            month={month}
            radius={radius}
            setToday={setToday}
            theme={theme}
            today={today} />
      </animated.Group>)}
    </Spring>
  );
};

export default Month;