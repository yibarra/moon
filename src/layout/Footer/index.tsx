import React, { FC, useCallback } from 'react';

import { IFooter } from './interfaces';

import { FooterFooter } from './styles';

// footer
const Footer: FC<IFooter> = () => {
  // redirect
  const redirect = useCallback(() => {
    window.open('mailto:yeissonibarra@gmail.com', '_blank');
  }, []);

  // render
  return (
    <FooterFooter>
      <button onClick={redirect}>
        <span>@Julian Ibarra</span>
      </button>
    </FooterFooter>
  );
};

export default Footer;