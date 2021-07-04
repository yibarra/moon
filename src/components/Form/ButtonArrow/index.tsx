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
  const width: number = 45;

  const { convertToRoman } = UseFormat();
  const [ numbText, setNumbText ] = useState<any>();

  const mayan = useMemo(() => new MayanNumber(), []);

  // get number
  const getNumberMayan = useCallback(async (value: any) =>
    await mayan.mayanGlyph(value).then(e => e.join('\n')), [ mayan ]);

  // get number
  const getNumber = useCallback(async (value: any) => {
    if (lang.value === 'en') {
      return convertToRoman(parseInt(value)).toString();
    }

    return await getNumberMayan(parseInt(value));
  }, [ convertToRoman, getNumberMayan, lang ]);

  // use effect
  useEffect(() => {
    const translate = async() => {
      if (!text) {
        setNumbText(text);
      } else {
        getNumber(text).then(e => setNumbText(e));
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
        fontFamily={lang.value === 'en' ? 'Roboto Slab' : 'MayanNumerals'}
        fontSize={lang.value === 'en' ? 8 : 10}
        offsetX={type === "right" ? width : 0 }
        verticalAlign="middle"
        text={numbText}
        x={x + (type === 'right' ? -offSet : offSet)}
        y={lang.value === 'en' ? y - 1 : y - 15}
        width={width} />}
    </Group>
  );
};

export default ButtonArrow;