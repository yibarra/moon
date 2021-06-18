import React from 'react';
import ReactDOM from 'react-dom';

import Main from './layout/Main';
import MainProvider from './providers/MainProvider';
import MoonProvider from './providers/MoonProvider';
import ThemeProvider from './providers/ThemeProvider';

import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <ThemeProvider>
        <MoonProvider>
          <Main />
        </MoonProvider>
      </ThemeProvider>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
