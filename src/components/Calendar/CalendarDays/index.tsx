import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Context } from 'konva/types/Context';
import { Shape, Group } from 'react-konva';
import hexRgb from 'hex-rgb';
import { Spring, animated as a } from '@react-spring/konva';

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
  theme,
  x,
  y
}) => {
  const { convertToRoman } = UseFormat();
  const { createCircle } = UseShapes();

  const mayan = useMemo(() => new MayanNumber(), []); // mayan

  const [items, setItems] = useState<any>([]); // items

  // border line
  const borderLine = useCallback((ctx: Context, circ: number) => {
    ctx.translate(x, y);
    ctx.rotate((day - 1) * angle);
    ctx.translate(-x, -y);

    createCircle(ctx, {
      fillStyle: 'transparent',
      lineWidth: 31,
      strokeStyle: theme.second,
    }, radius, -circ, circ, false, x + 2, y);
  }, [angle, createCircle, day, radius, theme, x, y]);

  // create circle
  const createBackground = useCallback((ctx: Context) => {
    createCircle(ctx, {
      'fillStyle': 'transparent',
      'lineWidth': 0.5,
      'strokeStyle': hexRgb(theme.second, { alpha: 1, format: 'css' })
    }, radius - 15, 0, Math.PI * 2, true, x, y);

    ctx.setLineDash([1, 8]);

    createCircle(ctx, {
      'fillStyle': 'transparent',
      'lineWidth': 0.5,
      'strokeStyle': hexRgb(theme.second, { alpha: 1, format: 'css' })
    }, radius - 17, 0, Math.PI * 2, true, x, y);

    ctx.setLineDash([0, 0]);

    createCircle(ctx, {
      'fillStyle': 'transparent',
      'lineWidth': 1,
      'strokeStyle': hexRgb(theme.second, { alpha: 1, format: 'css' })
    }, radius + 17, 0, Math.PI * 2, true, x, y);
  }, [createCircle, radius, theme, x, y]);

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

            temp.push({ angle, glyphs, day: currentDate, ...pos });
          });
    }

    setItems(temp);
  }, [angle, mayan, radius]);

  // create days
  const createDays = useCallback((ctx: CanvasRenderingContext2D) => {
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
  }, [angle, convertToRoman, day, radius, theme]);

  // use effect
  useEffect(() => {
    createMayanDays();
  }, [createMayanDays]);

  // render
  return (
    <Group
      listening={false}
      rotation={0}
      offsetX={x}
      offsetY={y}
      x={x}
      y={y}>
      <Shape
        listening={false}
        sceneFunc={(ctx: Context) => createBackground(ctx)} />

      <Spring
        reset
        from={{ value: 0 }}
        to={{ value: angle / 2 }}>
        {(props) => (
          <a.Shape
            listening={false}
            sceneFunc={(ctx: Context) => borderLine(ctx, props.value.to((n: any) => n).get())}
            {...props}>
          </a.Shape>
        )}
      </Spring>

      {lang.value === 'qu' ?
        <Group
          x={x}
          y={y}>
          {Array.isArray(items) && items.map((item: any, index: number) =>
            <CalendarDaysItem
              {...item}
              active={(day - 1) === index}
              radius={radius}
              theme={theme}
              key={index} />)}
        </Group> :
        <Group
          x={x}
          y={y}>
          <Shape
            listening={false}
            sceneFunc={(ctx: any) => createDays(ctx)} />
        </Group>
      }
    </Group>
  );
};

export default CalendarDays;