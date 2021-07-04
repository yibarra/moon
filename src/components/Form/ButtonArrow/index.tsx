import React, { FC, useCallback, useMemo, useState, useEffect } from 'react';
import { Group } from 'react-konva';

import IconArrow from '../../Icons/IconArrow';
import Text from '../../Typography/Text';

import MayanNumber from '../../../helpers/mayanNumber';
import UseFormat from '../../../uses/useFormat';

import { IButtonArrow } from './interfaces';

// button arrow
const ButtonArrow: FC<IButtonArrow> = ({
  color,
  lang,
  onClick,
  text,
  type,
  x,
  y
}) => {
  const offSet: number = 30;
  const width: number = 40;

  const { convertToRoman } = UseFormat();
  const [ numbText, setNumbText ] = useState<any>();

  const mayan = useMemo(() => new MayanNumber(), []);

  // get number
  const getNumberMayan = useCallback(async (value: any) =>
    await mayan.mayanGlyph(value).then(e => e), [ mayan ]);

  // get number
  const getNumber = useCallback(async (value: any) => {
    if (lang.value === 'en') {
      return convertToRoman(parseInt(value)).toString();
    }

    return await getNumberMayan(value);
  }, [ convertToRoman, getNumberMayan, lang ]);

  // use effect
  useEffect(() => {
    const translate = async() => {
      if (!text) {
        return false;
      } else {
        getNumber(text).then(e => setNumbText(e.join('\n')));
      }
    };
    
    translate();
  }, [ getNumber, text ]);

  // return
  return (
    <Group
      onTap={onClick}
      onClick={onClick}
      y={4}>
      <IconArrow
        color={color}
        offsetX={5}
        offsetY={15}
        type={type}
        x={x}
        y={y} />

      {text && <Text
        align="center"
        fill={color}
        fontFamily={lang.value === 'en' ? 'Roboto Condensed' : 'MayanNumerals'}
        fontSize={10}
        offsetX={type === "right" ? width : 0 }
        verticalAlign="middle"
        text={numbText}
        x={x + (type === 'right' ? -offSet : offSet)}
        y={y - 1}
        width={width} />}
    </Group>
  );
};

export default ButtonArrow;