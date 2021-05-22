import { parse, format, getDaysInMonth } from 'date-fns';
import React, { FC, useCallback } from 'react';
import { Group } from 'react-konva';

import MoonPhase from '../MoonPhase';
import MonthRadiusName from './MonthRadiusName';
import MonthRadiusPercent from './MonthRadiusPercent';

import { IMonthRadius } from './interfaces';
import { Spring } from '@react-spring/core';
import { animated } from '@react-spring/konva';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// month radius
const MonthRadius: FC<IMonthRadius> = ({
  month,
  radius,
  setToday,
  today,
  year
}) => {
  const fix: any = parse(format(new Date(`${year}-${month}-01`), 'yyyy-M-dd'), 'yyyy-M-dd', new Date());
  const current = parse(format(new Date(`${year}-${month}-${getDaysInMonth(fix)}`), 'yyyy-M-dd'), 'yyyy-M-dd', new Date());

  const todayMonth: number = today.getMonth();
  const todayYear: number = today.getFullYear();

  const monthMonth: number = current.getMonth();
  const monthYear: number = current.getFullYear();

  const active: boolean = ((monthMonth <= todayMonth && todayYear === monthYear) ) || monthYear < todayYear; // active month
  const currentMonth: boolean = todayMonth === monthMonth && todayYear === monthYear; // current month

  const day = getDaysInMonth(current); // day
  const angle = (2 * Math.PI) / REACT_APP_TOTAL_ITEMS_DEGREE; // angle

  const rotate = -(((today.getDate() - 1) / REACT_APP_TOTAL_ITEMS_DEGREE) * 360) - 90;

  // factory phases
  const factoryPhases = useCallback((day: number) => {
    const items = [];

    for (let i = 0; i < day; i++) {
      items.push({ day: i + 1 });
    }

    return items;
  }, []);

  // select day
  const selectDay = useCallback((day: number) => {
    if (!currentMonth) return 1;

    return day === today.getDate() ? 3 : 1;
  }, [ currentMonth, today ]);

  // select
  const selectDate = useCallback(() =>
    setToday(parse(format(new Date(`${year}-${month}-${day}`), 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date())),
    [ year, month, day, setToday ]);

  // month
  return (
    <Spring
      config={{
        duration: 150 * month,
      }}
      delay={50 * month}
      from={{ rotation: rotate }}
      to={{ rotation: rotate }}>
      {props => (<animated.Group
        {...props}
        x={(window.innerWidth / 2)}
        y={(window.innerHeight / 2)}
        listen={false}>
          <MonthRadiusName
            angle={angle * month}
            month={month}
            radius={radius}
            text={format(current, 'MMM')} />

          <MonthRadiusPercent
            active={active}
            angle={angle}
            currentMonth={currentMonth}
            day={day}
            month={month}
            today={today.getDate()}
            radius={radius} />

          {factoryPhases(day).map(({ day }, index: number) =>
            <Group
              listening={true}
              key={index}
              onClick={selectDate}
              onTap={selectDate}>
                <MoonPhase
                  angle={angle * index}
                  day={day}
                  month={month}
                  size={4}
                  strokeWidth={selectDay(day)}
                  x={Math.cos(angle * index) * radius}
                  y={Math.sin(angle * index) * radius}
                  year={year} />
              </Group>)}
        </animated.Group>)}
    </Spring>
  );
};

export default MonthRadius;