import React, { FC } from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Group } from 'react-konva';

import MonthContainer from './MonthContainer';
import MonthName from './MonthName';
import MonthPercent from './MonthPercent';

import UseFormat from '../../uses/useFormat';

import { IMonth } from './interfaces';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// month radius
const Month: FC<IMonth> = ({
  animate,
  month,
  radius,
  setToday,
  today,
  theme,
  x,
  y
}) => {
  const { t }: any = useTranslation();
  const { fixDate, getActiveMonth } = UseFormat(); // fix date

  const angle = (2 * Math.PI) / (REACT_APP_TOTAL_ITEMS_DEGREE); // angle
  const current = fixDate(today.getFullYear(), month); // current

  const { active, currentMonth, day }: any = getActiveMonth(today, current);

  // month
  return (
    <Group
      listening={!animate}
      x={x}
      y={y}>
      <MonthPercent
        animate={animate}
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
        text={t(`months.${format(current, 'MMM').toLowerCase()}`)} />

      <MonthContainer
        angle={angle}
        currentMonth={currentMonth}
        day={day}
        month={month}
        radius={radius}
        setToday={setToday}
        theme={theme}
        today={today} />
    </Group>
  );
};

export default Month;