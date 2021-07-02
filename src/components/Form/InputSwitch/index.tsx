import React, { FC } from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../providers/ThemeProvider';

import { IInputSwitch } from './interfaces';

import './styles.scss';

// input switch
const InputSwitch: FC<IInputSwitch> = ({
  labelL,
  labelR,
  name,
  onChange,
  value
}) => {
  const { t }: any = useTranslation();
  const { theme }: any = useContext(ThemeContext);

  // render
  return (
    <label className="switch">
      <span className="switch--label" style={{ color: theme.second }}>{t(labelL)}</span>
      <div className="switch--input">
        <input
          name={name}
          onChange={() => onChange(!value)}
          type="checkbox" />
        <span className="slider"></span>
      </div>
      <span className="switch--label" style={{ color: theme.second }}>{t(labelR)}</span>
    </label>
  );
};

export default InputSwitch;