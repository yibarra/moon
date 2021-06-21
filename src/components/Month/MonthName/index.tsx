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
  const createCircle = useCallback((ctx: CanvasRenderingContext2D) => {
    const initAngle = angle;
    const endAngle = updateName(day);

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = active ? theme.main : theme.second;
    ctx.lineWidth = 19;
    ctx.arc(0, 0, radius, initAngle, endAngle, true);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }, [ active, angle, day, radius, theme, updateName]);

  // create name
  const createName = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.font = "10px Roboto Condensed";
    ctx.fillStyle = active ? theme.second : theme.main;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    new TextCircle(ctx, text, 0, 0, radius, Math.PI, undefined, false); // text
  }, [ active, radius, theme, text ]);

  // render
  return (
    <Group
      listening={false}
      rotation={toDegrees(-(Math.PI * 2) / 31)}>
      <Shape
        listening={false}
        sceneFunc={(ctx: any) => createCircle(ctx)} />

      <Shape
        listening={false}
        sceneFunc={(ctx: any) => createName(ctx)}
        scaleX={-1} />
    </Group>
  );
};

export default MonthName;