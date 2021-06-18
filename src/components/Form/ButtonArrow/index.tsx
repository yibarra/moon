import React, { FC } from 'react';
import { Group } from 'react-konva';

import IconArrow from '../../Icons/IconArrow';
import Paragraph from '../../Typography/Paragraph';

import { IButtonArrow } from './interfaces';

// button arrow
const ButtonArrow: FC<IButtonArrow> = ({
  color,
  onClick,
  text,
  type,
  x,
  y
}) => {
  const offSet: number = 30;
  const width: number = 40;

  // return
  return (
    <Group
      onTap={onClick}
      onClick={onClick}>
      <IconArrow
        color={color}
        type={type}
        x={x}
        y={y} />

      {text && <Paragraph
        align="center"
        fill={color}
        offsetX={type === "right" ? width : 0 }
        text={text}
        x={x + (type === 'right' ? -offSet : offSet)}
        y={y + 2}
        width={width} />}
    </Group>
  );
};

export default ButtonArrow;