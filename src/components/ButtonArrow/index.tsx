import React, { FC } from 'react';
import { Group, Text } from 'react-konva';

import IconArrow from '../Icons/IconArrow';

import { IButtonArrow } from './interfaces';

// button arrow
const ButtonArrow: FC<IButtonArrow> = ({
  onClick,
  text,
  type,
  x,
  y
}) => {
  // return
  return (
    <Group>
      <IconArrow
        type={type}
        onClick={onClick}
        x={x}
        y={y} />

      {text && <Text
        fill="white"
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