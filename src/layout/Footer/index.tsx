import React, { FC, useCallback } from 'react';

import { IFooter } from './interfaces';

// footer
const Footer: FC<IFooter> = () => {
  // redirect
  const redirect = useCallback(() => {
    window.open('mailto:yeissonibarra@gmail.com', '_blank');
  }, []);

  // render
  return (
    <footer>
      <button onClick={redirect}>
        <span>@Julian Ibarra</span>
      </button>
    </footer>
  );
};

export default Footer;