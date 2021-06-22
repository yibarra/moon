import React, { FC } from 'react';

import { IInputSwitch } from './interfaces';

import './styles.scss';

// input switch
const InputSwitch: FC<IInputSwitch> = ({
  name,
  onChange,
  value
}) => {
  // render
  return (
    <label className="switch">
      <input
        name={name}
        onChange={() => onChange(!value)}
        type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default InputSwitch;