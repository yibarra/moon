import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Spring, animated } from '@react-spring/konva';
import { Circle } from 'react-konva';
import hexRgb from 'hex-rgb';

import MayanNumber from '../../../helpers/mayanNumber';

import CalendarDaysItem from './CalendarDaysItem';

// calendar days
const CalendarDays: FC<any> = ({
  angle,
  day,
  radius,
  rotate,
  theme,
  x,
  y
}) => {
  const mayan = useMemo(() => new MayanNumber(), []);

  const [items, setItems] = useState<any>([]);

  // days mayan
  const createMayanDays = useCallback(async () => {
    const temp: any[] = [];

    for (let i = 0; i < 31; i++) {
      const currentDate = i + 1;

      await mayan.mayanGlyph(currentDate)
        .then(
          (glyphs: any) => {
            const pos = {
              x: (Math.cos(i * angle) * radius),
              y: (Math.sin(i * angle) * radius)
            };

            temp.push({ angle, glyphs, rotate, day: currentDate, ...pos });
          });
    }

    setItems(temp);
  }, [angle, mayan, rotate, radius]);

  // use effect
  useEffect(() => {
    createMayanDays();
  }, [createMayanDays]);

  // render
  return (
    <>
      <Circle
        fill="transparent"
        strokeWidth={31}
        listening={false}
        stroke={hexRgb(theme.second, { alpha: 0.1, format: 'css' })}
        radius={radius}
        x={x}
        y={y} />

      <Circle
        fill="transparent"
        strokeWidth={30}
        listening={false}
        stroke={theme.main}
        radius={radius}
        x={x}
        y={y} />

      <Spring
        config={{
          duration: 1050,
        }}
        reset
        from={{
          opacity: 0
        }}
        to={{
          opacity: 1
        }}>
        {props => (<animated.Group
          x={x}
          y={y}
          {...props}
          rotation={rotate}>
          {Array.isArray(items) && items.map((item: any, index: number) =>
            <CalendarDaysItem
              {...item}
              radius={radius}
              theme={theme}
              key={index} />)}
        </animated.Group>)}
      </Spring>
    </>
  );
};

export default CalendarDays;


/*
<Spring
      config={{
        duration: 450
      }}
      delay={90 * 11}
      from={{ rotation: 0 }}
      to={{ rotation: rotate }}>
      {props => (<animated.Group
        x={x}
        y={y}
        {...props}>
        <Circle
          fill="transparent"
          strokeWidth={22}
          listening={false}
          stroke={hexRgb(theme.second, { alpha: 0.1, format: 'css' })}
          radius={radius} />

        <Circle
          fill="transparent"
          strokeWidth={21}
          listening={false}
          stroke={theme.main}
          radius={radius} />


      </animated.Group>)}
    </Spring>
*/