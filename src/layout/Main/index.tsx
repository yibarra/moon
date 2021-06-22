import React, { FC, useContext } from 'react';
import { Stage } from 'react-konva';

import Calendar from '../../components/Calendar';

import Header from '../Header';
import Footer from '../Footer';

import { MainContext } from '../../providers/MainProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IMain } from './interfaces';

import './styles.scss';

// main
const Main: FC<IMain> = () => {
  const { loaded, date, setDate, size } = useContext(MainContext);
  const { theme } = useContext(ThemeContext);

  // render
  return (
    <section
      className="main"
      style={{ backgroundColor: theme.main }}>
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
    </section>
  );
};

export default Main;