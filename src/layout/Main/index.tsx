import React, { FC, useContext } from 'react';
import { Stage } from 'react-konva';

import Calendar from '../../components/Calendar';

import Header from '../Header';
import Footer from '../Footer';

import { MainContext } from '../../providers/MainProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IMain } from './interfaces';

// main
const Main: FC<IMain> = () => {
  const { loaded, date, setDate, size } = useContext(MainContext);
  const { theme } = useContext(ThemeContext);

  // render
  return (
    <>
      <Header />

      {loaded &&
        <Stage
          height={size.height}
          width={size.width}>
            <Calendar
              setToday={setDate}
              size={size}
              today={date}
              theme={theme} />
        </Stage>}

      <Footer />
    </>
  );
};

export default Main;