import React, { FC } from 'react';

// input switch
const InputSwitch: FC<any> = ({
  value
}) => {
  // render
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default InputSwitch;