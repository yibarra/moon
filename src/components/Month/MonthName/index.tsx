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
  radius,
  theme,
  text
}) => {
  const { toDegrees } = UseFormat(); // convert

  // update name
  const updateName = useCallback((day: number): number =>
    ((day) * angle), [ angle ]);

  // create circle
  const createCircle = useCallback((ctx: Context) => {
    const initAngle = angle;
    const endAngle = updateName(day);

    ctx.save();
    ctx.beginPath();
    ctx.setAttr('fillStyle', 'transparent');
    ctx.setAttr('strokeStyle', active ? theme.second : theme.main);
    ctx.setAttr('lineWidth', 17);
    ctx.arc(0, 0, radius, initAngle, endAngle, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }, [ active, angle, day, radius, theme, updateName]);

  // create name
  const createName = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.font = "7px Roboto Condensed";
    ctx.fillStyle = active ? theme.main : theme.second;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.scale(-1, 1);

    new TextCircle(ctx, text, 0, 0, radius, -(Math.PI - (angle / 2)), undefined, true); // text
  }, [ active, angle, radius, theme, text ]);

  // render
  return (
    <Group
      listening={false}
      rotation={toDegrees(-(Math.PI * 2) - angle)}>
      {active &&
        <Shape
          listening={false}
          sceneFunc={(ctx: Context) => createCircle(ctx)} />}

      <Shape
        listening={false}
        sceneFunc={(ctx: any) => createName(ctx)}
         />
    </Group>
  );
};

export default MonthName;