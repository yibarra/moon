import React, { FC, SyntheticEvent, useCallback } from 'react';

import { IInputRange } from './interfaces';

import './styles.scss';

// input range
const InputRange: FC<IInputRange> = (props) => {
  const { setValue } = props;

  // change
  const onChange = useCallback((event: SyntheticEvent<EventTarget>) => {
    const value = (event.target as HTMLInputElement).value;

    setValue(parseInt(value));
  }, [ setValue ]);

  // render
  return (
    <label className="input-range">
      <input
        {...props}
        type="range"
        className="input-range--slider"
        onChange={onChange} />
    </label>
  );
};

export default InputRange;