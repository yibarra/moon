import React, { FC } from 'react';
import { Group } from 'react-konva';

import MoonPhase from '../Moon/MoonPhase';
import MonthRadiusName from './MonthName';
import MonthPercent from './MonthPercent';

import UseFormat from '../../uses/useFormat';

import { IMonth } from './interfaces';
import MonthContainer from './MonthContainer';

// env
const { REACT_APP_TOTAL_ITEMS_DEGREE }: any = process.env;

// month radius
const Month: FC<IMonth> = ({
  month,
  radius,
  setToday,
  today,
  theme
}) => {
  const { fixDate, getActiveMonth } = UseFormat();
  const angle = (2 * Math.PI) / (REACT_APP_TOTAL_ITEMS_DEGREE); // angle

  const rotate = -(((today.getDate() - 1) / REACT_APP_TOTAL_ITEMS_DEGREE) * 360) - 90;
  
  const current = fixDate(today.getFullYear(), month);
  const { active, currentMonth, day }: any = getActiveMonth(today, current);

  // month
  return (
    <Group 
      x={(window.innerWidth / 2)}
      y={(window.innerHeight / 2)}
      rotation={rotate}>
        <MonthPercent
          active={active}
          angle={angle}
          currentMonth={currentMonth}
          day={day}
          month={month}
          theme={theme}
          today={today.getDate()}
          radius={radius} />

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

/*

const dayPos = this.updatePos(day, current, percent);
      
const xPos: number = (Math.cos(dayPos * this.angle) * this.radius) + x;
const yPos: number = (Math.sin(dayPos * this.angle) * this.radius) + y;


<Spring
      config={{
        duration: 150 * month,
      }}
      delay={50 * month}
      from={{ rotation: 0 }}
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
              onClick={() => selectDate(day)}
              onTap={() => selectDate(day)}>
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
    */