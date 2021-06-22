import React, { FC } from 'react';
import InputSwitch from '../../components/Form/InputSwitch';

// header
const Header: FC<any> = () => {
  // render
  return (
    <header>
      <div>
        <InputSwitch />
      </div>
    </header>
  );
};

export default Header;