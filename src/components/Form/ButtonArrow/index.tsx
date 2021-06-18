import React, { FC } from 'react';
import { Group, Text } from 'react-konva';

import IconArrow from '../../Icons/IconArrow';

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

      {text && <Text
        fill={color}
        fontFamily="Roboto Slab"
        fontSize={12}
        fontStyle="bold"
        align="center"
        x={x + (type === 'right' ? -40 : 40)}
        y={y + 2}
        offsetX={type === "right" ? 40 : 0}
        text={text}
        width={40} />}
    </Group>
  );
};

export default ButtonArrow;