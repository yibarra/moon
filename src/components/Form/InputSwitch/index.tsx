import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IInputSwitch } from './interfaces';

import { InputSwitchLabel, InputSwitchSpan, InputSwitchSlider } from './styles';

// input switch
const InputSwitch: FC<IInputSwitch> = ({
  labelL,
  labelR,
  name,
  onChange,
  value
}) => {
  const { t }: any = useTranslation();

  // render
  return (
    <InputSwitchLabel>
      <InputSwitchSpan>{t(labelL)}</InputSwitchSpan>
      <InputSwitchSlider>
        <input
          name={name}
          onChange={() => onChange(value)}
          type="checkbox" />
        <span className="slider"></span>
      </InputSwitchSlider>
      <InputSwitchSpan>{t(labelR)}</InputSwitchSpan>
    </InputSwitchLabel>
  );
};

export default InputSwitch;