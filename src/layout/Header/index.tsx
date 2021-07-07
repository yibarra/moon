import React, { FC, useCallback, useState } from 'react';
import InputRange from '../../components/Form/InputRange';
import DatePicker from 'react-datepicker';

import InputSwitch from '../../components/Form/InputSwitch';
import LangSelect from '../../components/LangSelect';

import "react-datepicker/dist/react-datepicker.css";

import { HeaderDateDiv } from './styles';

import './styles.scss';

// header
const Header: FC<any> = ({
  date,
  lang,
  langs,
  setLang,
  scale,
  setDate,
  setScale,
  radius,
  setRadius,
  setColors
}) => {
  const [ color, setColor ] = useState<boolean>(true);

  // on theme change
  const onThemeChange = useCallback((value: any) => {
    if (value === false) {
      setColors('#303336', '#EADDC1');
    } else {
      setColors('#2C4C9C', '#F2F3F5');
    }

    setColor(!value);
  }, [setColors]);

  // on scale
  const onScale = useCallback((value: number) =>
    setScale(value / 100), [setScale]);

  // render
  return (
    <header
      className="header">
      <div className="filter">
        <div className="filter--item">
          <InputSwitch
            labelL="theme.dark"
            labelR="theme.light"
            name="color"
            value={color}
            onChange={onThemeChange} />
        </div>

        <div className="filter--item">
          <LangSelect
            lang={lang}
            langs={langs}
            setLang={setLang} />
        </div>
      </div>

      <HeaderDateDiv>
        <DatePicker selected={date} onChange={(date: any) => setDate(date)} />
      </HeaderDateDiv>

      <div className="filter">
        <div className="filter--item slider">
          <InputRange
            label="form.radius"
            min={110}
            max={400}
            set={setRadius}
            value={radius} />
        </div>

        <div className="filter--item slider">
          <InputRange
            label="form.scale"
            min={100}
            max={200}
            set={onScale}
            value={scale * 100} />
        </div>
      </div>
    </header>
  );
};

export default Header;