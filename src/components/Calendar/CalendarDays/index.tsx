import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Context } from 'konva/types/Context';
import { Spring, animated as a } from '@react-spring/konva';
import { Shape } from 'react-konva';
import hexRgb from 'hex-rgb';

import CalendarDaysItem from './CalendarDaysItem';

import MayanNumber from '../../../helpers/mayanNumber';
import TextCircle from '../../Typography/TextCircle';

import UseFormat from '../../../uses/useFormat';
import UseShapes from '../../../uses/useShape';

import { ICalendarDays } from './interfaces';

// calendar days
const CalendarDays: FC<ICalendarDays> = ({
  angle,
  day,
  lang,
  radius,
  rotate,
  theme,
  x,
  y
}) => {
  const { convertToRoman } = UseFormat();
  const { createCircle } = UseShapes();

  const mayan = useMemo(() => new MayanNumber(), []); // mayan

  const [ items, setItems ] = useState<any>([]); // items

  // create circle
  const createBackground = useCallback((ctx: Context) => {
    createCircle(ctx, {
      'fillStyle': 'transparent',
      'lineWidth': 31,
      'strokeStyle': hexRgb(theme.second, { alpha: 0.1, format: 'css' })
    }, radius, 0, Math.PI * 2, true, x, y);

    createCircle(ctx, {
      'fillStyle': 'transparent',
      'lineWidth': 30,
      'strokeStyle':  theme.main
    }, radius, 0, Math.PI * 2, true, x, y);
  }, [ createCircle, radius, theme, x, y ]);

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

  // create days
  const createDays = useCallback((ctx: CanvasRenderingContext2D, rotation: any) => {
    for (let i = 0; i < 31; i++) {
      const currentDate = i + 1;

      const roman: any[] = Array.from(convertToRoman(currentDate));
      const dayRoman: string = roman.reverse().join('').toString();
      
      ctx.save();
      ctx.beginPath();
      ctx.font = "700 7px Roboto Slab";
      ctx.strokeStyle = 'transparent';
      ctx.fillStyle = (day === (i + 1)) ? theme.main : theme.second;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      new TextCircle(ctx, dayRoman, 0, 0, radius, (angle * i), undefined, true); // text
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
  }, [ angle, convertToRoman, day, radius, theme ]);

  // use effect
  useEffect(() => {
    createMayanDays();
  }, [createMayanDays]);

  // render
  return (
    <>
      <Shape
        listening={false}
        sceneFunc={(ctx: Context) => createBackground(ctx)} />
          
      {lang.value === 'qu' ?
        <Spring
          config={{
            duration: 1050,
          }}
          reset
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1
          }}>
          {props => (<a.Group
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
          </a.Group>)}
        </Spring> :
        <Spring
          config={{
            duration: 450
          }}
          delay={90 * 11}
          from={{ rotation: 0 }}
          to={{ rotation: rotate }}>
          {props => (<a.Group
            x={x}
            y={y}
            {...props}>
            <Shape
              listening={false}
              sceneFunc={(ctx: any) => createDays(ctx, props.rotation.to((n: any) => n))} />
          </a.Group>)}
        </Spring>
      }
    </>
  );
};

export default CalendarDays;