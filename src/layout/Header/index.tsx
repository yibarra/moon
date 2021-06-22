import React, { FC, useCallback, useContext, useState } from 'react';
import InputRange from '../../components/Form/InputRange';

import InputSwitch from '../../components/Form/InputSwitch';
import { ThemeContext } from '../../providers/ThemeProvider';

import './styles.scss';

// header
const Header: FC<any> = ({
  radius,
  setRadius,
}) => {
  const { setColors } = useContext(ThemeContext);

  const [ color, setColor ] = useState<boolean>(false);

  // on theme change
  const onThemeChange = useCallback((value: boolean) => {
    if (value === false) {
      setColors('#262B2F', '#EADDC1');
    } else {
      setColors('#2F477E', '#B2BCBE');
    }

    setColor(value);
  }, [ setColors ]);

  // render
  return (
    <header
      className="header">
      <div className="filter">
        <InputSwitch
          name="color"
          value={color}
          onChange={onThemeChange} />
      </div>

      <div className="filter">
        <InputRange
          min={110}
          max={400}
          setValue={setRadius}
          value={radius} />
      </div>
    </header>
  );
};

export default Header;