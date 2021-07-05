import React, { FC, SyntheticEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { IInputRange } from './interfaces';

import { InputRangeLabel, InputRangeSpan } from './styles';

// input range
const InputRange: FC<IInputRange> = (props) => {
  const { t }: any = useTranslation();
  const { label, set, min, max, value } = props;

  // change
  const onChange = useCallback((event: SyntheticEvent<EventTarget>) => {
    const value = (event.target as HTMLInputElement).value;

    set(parseInt(value));
  }, [ set ]);

  // render
  return (
    <InputRangeLabel>
      <InputRangeSpan>{t(label)}</InputRangeSpan>

      <input
        className="input-range--slider"
        min={min}
        max={max}
        onChange={onChange} 
        type="range"
        value={value} />
    </InputRangeLabel>
  );
};

export default InputRange;