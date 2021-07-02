import React, { FC, SyntheticEvent, useCallback } from 'react';

import { IInputRange } from './interfaces';

import './styles.scss';

// input range
const InputRange: FC<IInputRange> = (props) => {
  const { set, min, max, value } = props;

  // change
  const onChange = useCallback((event: SyntheticEvent<EventTarget>) => {
    const value = (event.target as HTMLInputElement).value;

    set(parseInt(value));
  }, [ set ]);

  // render
  return (
    <label className="input-range">
      <input
        className="input-range--slider"
        min={min}
        max={max}
        onChange={onChange} 
        type="range"
        value={value} />
    </label>
  );
};

export default InputRange;