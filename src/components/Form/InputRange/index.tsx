import React, { FC } from 'react';

import { IInputRange } from './interfaces';

import './styles.scss';

// input range
const InputRange: FC<IInputRange> = (props) => {
  // render
  return (
    <div>
      <input
        {...props}
        type="range"
        className="slider" />
    </div>
  );
};

export default InputRange;