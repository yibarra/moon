import React, { FC, useContext } from 'react';
import { Stage } from 'react-konva';

import Calendar from '../../components/Calendar';

import Header from '../Header';
import Footer from '../Footer';

import { MainContext } from '../../providers/MainProvider';
import { LangContext } from '../../providers/LangProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IMain } from './interfaces';

import { MainSection } from './styles';

// main
const Main: FC<IMain> = () => {
  const {
    loaded,
    date,
    setDate,
    size,
    scale,
    setScale,
    radius,
    setRadius,
    pos,
    setPos } = useContext(MainContext);
  const { lang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);

  // render
  return (
    <MainSection
      style={{ backgroundColor: theme.main }}>

      <Header
        scale={scale}
        setScale={setScale}
        radius={radius}
        setRadius={setRadius} />

      {loaded &&
        <Stage
          className="stage"
          height={size.height}
          width={size.width}>
          <Calendar
            lang={lang}
            radius={radius}
            setToday={setDate}
            pos={pos}
            scale={scale}
            setPos={setPos}
            size={size}
            today={date}
            theme={theme} />
        </Stage>}

      <Footer />
    </MainSection>
  );
};

export default Main;