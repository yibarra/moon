import React, { FC, useCallback, useContext, useState } from 'react';
import InputRange from '../../components/Form/InputRange';

import InputSwitch from '../../components/Form/InputSwitch';
import LangSelect from '../../components/LangSelect';
import { LangContext } from '../../providers/LangProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import './styles.scss';

// header
const Header: FC<any> = ({
  scale,
  setScale,
  radius,
  setRadius
}) => {
  const { setColors } = useContext(ThemeContext);
  const { lang, langs, setLang }: any = useContext(LangContext);

  const [color, setColor] = useState<boolean>(true);

  // on theme change
  const onThemeChange = useCallback((value: any) => {
    if (value === false) {
      setColors('#262B2F', '#EADDC1');
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