import React, { FC, useContext } from 'react';
import { Stage } from 'react-konva';

import Calendar from '../../components/Calendar';

import Header from '../Header';
import Footer from '../Footer';

import { MainContext } from '../../providers/MainProvider';
import { LangContext } from '../../providers/LangProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IMain } from './interfaces';

import './styles.scss';

// main
const Main: FC<IMain> = () => {
  const { loaded, date, setDate, size, radius, setRadius, pos, setPos } = useContext(MainContext);
  const { lang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);

  // render
  return (
    <section
      className="main"
      style={{ backgroundColor: theme.main }}>

      <Header
        radius={radius}
        setRadius={setRadius} />

      {loaded &&
        <Stage
          height={size.height}
          width={size.width}>
          <Calendar
            lang={lang}
            radius={radius}
            setToday={setDate}
            pos={pos}
            setPos={setPos}
            size={size}
            today={date}
            theme={theme} />
        </Stage>}

      <Footer />
    </section>
  );
};

export default Main;