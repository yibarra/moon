import React, { FC, useContext } from 'react';
import { Stage } from 'react-konva';

import Calendar from '../../components/Calendar';
import Footer from '../Footer';

import { IMain } from './interfaces';
import { MainContext } from '../../providers/MainProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

// main
const Main: FC<IMain> = () => {
  const { loaded, date, setDate, size } = useContext(MainContext);
  const { theme } = useContext(ThemeContext);

  // render
  return (
    <>
      {loaded &&
        <Stage
          height={size.height}
          width={size.width}>
            <Calendar
              setToday={setDate}
              size={size}
              today={date}
              theme={theme} />
          <Footer />
      </Stage>}
    </>
  );
};

export default Main;