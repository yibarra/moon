import React, { FC, useCallback } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IFooter } from './interfaces';

import './styles.scss';

// footer
const Footer: FC<IFooter> = () => {
  const { theme } = useContext(ThemeContext);

  // redirect
  const redirect = useCallback(() => {
    window.open('mailto:yeissonibarra@gmail.com', '_blank');
  }, []);

  // render
  return (
    <footer
      className="footer">
      <button onClick={redirect}>
        <span style={{ color: theme.second }}>@Julian Ibarra</span>
      </button>
    </footer>
  );
};

export default Footer;