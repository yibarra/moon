import React, { FC, useEffect, useMemo, useState } from 'react';
import MayanNumber from '../../../../../helpers/mayanNumber';
import { Text as TextKonva } from 'react-konva';

import Text from '../../../../Typography/Text';

import { IMoonTodayInfoLabel } from './interfaces';

// moon today info year
const MoonTodayInfoLabel: FC<IMoonTodayInfoLabel> = ({
  offSetY,
  label,
  theme,
  value,
  x,
  y
}) => {
  const mayan = useMemo(() => new MayanNumber(), []);

  const [ symbol, setSymbol ] = useState<any>();

  // use effect
  useEffect(() => {
    mayan.mayanGlyph(parseInt(value))
      .then((glyphs: any) => setSymbol(glyphs));
  }, [ mayan, value ]);

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
    </>
  );
};

export default MoonTodayInfoLabel;