import { Spring, animated as a } from '@react-spring/konva';
import { Context } from 'konva/types/Context';
import React, { FC, useCallback } from 'react';
import { Group, Shape } from 'react-konva';

import UseFormat from '../../../uses/useFormat';

import TextCircle from '../../Typography/TextCircle';

import { IMonthName } from './interfaces';

// month radius name
const MonthName: FC<IMonthName> = ({
  active,
  angle,
  day,
  month,
  radius,
  theme,
  text
}) => {
  const { toDegrees } = UseFormat(); // convert

  // update name
  const updateName = useCallback((day: number): number =>
    ((day) * angle), [angle]);

  // create circle
  const createCircle = useCallback((ctx: Context, endAngle: number, color: string) => {
    const initAngle = angle;

    ctx.save();
    ctx.beginPath();
    ctx.setAttr('fillStyle', 'transparent');
    ctx.setAttr('strokeStyle', color);
    ctx.setAttr('lineWidth', 17);
    ctx.arc(0, 0, radius, endAngle, initAngle, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }, [ angle, radius ]);

  // create name
  const createName = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.font = "7px Roboto Condensed";
    ctx.fillStyle = active ? theme.main : theme.second;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.scale(-1, 1);

    new TextCircle(ctx, text, 0, 0, radius, -(Math.PI - (angle / 2)), undefined, true); // text
  }, [active, angle, radius, theme, text]);

  // get value
  const getValue = useCallback((prop: any) =>
    prop.to((n: any) => n).get(), []);

  // render
  return (
    <Group
      listening={false}
      rotation={toDegrees(-(Math.PI * 2) - angle)}>
      {active &&
        <Spring
          from={{ 
            color: theme.main,
            endAngle: (Math.PI * 2)
          }}
          to={{
            color: theme.second,
            endAngle: updateName(day),
            }}>
          {(props: any) => (
            <a.Shape
              listening={false}
              sceneFunc={(ctx: Context) => createCircle(ctx, getValue(props.endAngle), getValue(props.color))}
              {...props}>
            </a.Shape>)}
        </Spring>}

      <Shape
        listening={false}
        sceneFunc={(ctx: any) => createName(ctx)} />
    </Group>
  );
};

export default MonthName;