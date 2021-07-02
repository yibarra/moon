import format from 'date-fns/format';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Text as TextKonva } from 'react-konva';
import { useTranslation } from 'react-i18next';

import MayanNumber from '../../../../../helpers/mayanNumber';
import Text from '../../../../Typography/Text';

import { IMoonTodayInfoYear } from './interfaces';
import UseMoon from '../../../../../uses/useMoon';

// moon today info year
const MoonTodayInfoYear: FC<IMoonTodayInfoYear> = ({
  theme,
  today,
  x,
  y
}) => {
  const { t }: any = useTranslation();
  const { getMoonPhaseName }: any = UseMoon();

  const moonPhase = getMoonPhaseName(today.getFullYear(), today.getMonth(), today.getDate());
  const mayan = useMemo(() => new MayanNumber(), []);
  const offSetY: number = 60; // y

  const [ year, setYear ] = useState<any>();

  // use effect
  useEffect(() => {
    mayan.mayanGlyph(parseInt(format(today, 'yyyy')))
      .then((glyphs: any) => setYear(glyphs));
  }, [ mayan, today ]);

  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={8}
        width={140}
        x={x - (140 / 2)}
        y={y + offSetY}
        text={t(moonPhase)} /> 

      <TextKonva
        fontSize={10}
        fontFamily="MayanNumerals"
        fill={theme.second}
        fontStyle="bold"
        verticalAlign="bottom"
        text={Array.isArray(year) ? year.join('\n') : ''}
        height={30}
        width={20}
        wrap="word"
        x={x - 5}
        y={y + (offSetY + 10)} />
    </>
  );
};

export default MoonTodayInfoYear;