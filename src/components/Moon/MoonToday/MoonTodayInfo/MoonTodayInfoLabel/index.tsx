import React, { FC, useEffect, useMemo, useState } from 'react';
import MayanNumber from '../../../../../helpers/mayanNumber';
import { Text as TextKonva } from 'react-konva';

import Text from '../../../../Typography/Text';

import UseFormat from '../../../../../uses/useFormat';

import { IMoonTodayInfoLabel } from './interfaces';

// moon today info year
const MoonTodayInfoLabel: FC<IMoonTodayInfoLabel> = ({
  offSetY,
  lang,
  label,
  theme,
  value,
  x,
  y
}) => {
  const mayan = useMemo(() => new MayanNumber(), []);
  const [ symbol, setSymbol ] = useState<any>();
  const { convertToRoman }: any = UseFormat();

  // use effect
  useEffect(() => {
    const getNumber = async () => {
      await mayan.mayanGlyph(value)
        .then((glyphs: any) => {
          if (lang.value === 'qu')
            setSymbol(glyphs);
          else
            setSymbol(convertToRoman(value));
        });
    }

    getNumber();
  }, [ convertToRoman, lang, mayan, value ]);

  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={8}
        width={140}
        x={x - (140 / 2)}
        y={y + offSetY}
        text={label} />

      {lang.value === 'qu' ?
        <TextKonva
          fontSize={10}
          fontFamily="MayanNumerals"
          verticalAlign="bottom"
          fill={theme.second}
          fontStyle="bold"
          text={Array.isArray(symbol) ? symbol.join('\n') : ''}
          height={30}
          width={20}
          wrap="word"
          x={x - 5}
          y={y + (offSetY - 5)} />
        : <Text
            fill={theme.second}
            fontFamily="Roboto Slab"
            align="center"
            fontSize={9}
            text={symbol}
            verticalAlign="middle"
            height={30}
            width={40}
            x={x - 20}
            y={y + (offSetY + 5)} />}
    </>
  );
};

export default MoonTodayInfoLabel;