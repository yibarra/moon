import format from 'date-fns/format';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Text as TextKonva } from 'react-konva';
import { useTranslation } from 'react-i18next';

import UseMoon from '../../../../../uses/useMoon';

import MayanNumber from '../../../../../helpers/mayanNumber';
import Text from '../../../../Typography/Text';

import { IMoonTodayInfoYear } from './interfaces';
import UseFormat from '../../../../../uses/useFormat';

// moon today info year
const MoonTodayInfoYear: FC<IMoonTodayInfoYear> = ({
  lang,
  theme,
  today,
  x,
  y
}) => {
  const { t }: any = useTranslation();
  const { getMoonPhaseName }: any = UseMoon();
  const { convertToRoman }: any = UseFormat();

  const moonPhase = getMoonPhaseName(today.getFullYear(), today.getMonth(), today.getDate());
  const mayan = useMemo(() => new MayanNumber(), []);
  const offSetY: number = 60; // y

  const [ year, setYear ] = useState<any>();

  // use effect
  useEffect(() => {
    const getNumber = async () => {
      const value = parseInt(format(today, 'yyyy'));

      await mayan.mayanGlyph(value)
        .then((glyphs: any) => {
          if (lang.value === 'qu')
            setYear(glyphs);
          else
            setYear(convertToRoman(value));
        });
    }

    getNumber();
  }, [ convertToRoman, lang, mayan, today ]);

  // render
  return (
    <>
      <Text
        fill={theme.second}
        fontSize={8}
        text={t(moonPhase)}
        x={x - (140 / 2)}
        y={y + offSetY}
        width={140} /> 

      {lang.value === 'qu' ? <TextKonva
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
        y={y + (offSetY + 7)} />
      : <Text
          fill={theme.second}
          align="center"
          fontFamily="Roboto Slab"
          fontSize={8}
          text={year}
          verticalAlign="middle"
          height={30}
          width={50}
          x={x - 25}
          y={y + (offSetY + 5)} />}
    </>
  );
};

export default MoonTodayInfoYear;