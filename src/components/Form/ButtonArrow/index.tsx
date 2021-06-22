import React, { FC } from 'react';
import { Group } from 'react-konva';

import IconArrow from '../../Icons/IconArrow';
import Text from '../../Typography/Text';

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
      onClick={onClick}
      y={4}>
      <IconArrow
        color={color}
        offsetX={6}
        offsetY={20}
        type={type}
        x={x}
        y={y} />

      {text && <Text
        align="center"
        fill={color}
        fontSize={10}
        offsetX={type === "right" ? width : 0 }
        text={text}
        x={x + (type === 'right' ? -offSet : offSet)}
        y={y - 1}
        width={width} />}
    </Group>
  );
};

export default ButtonArrow;