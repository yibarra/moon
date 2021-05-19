import React from 'react';
import { Stage } from 'react-konva';

import Calendar from '../../components/Calendar';

import MainProvider from '../../providers/MainProvider';
import MoonProvider from '../../providers/MoonProvider';

// main
const Main = () => {
  return (
    <MainProvider>
      <MoonProvider>
        <Stage
          height={window.innerHeight}
          width={window.innerWidth}>
            <Calendar
              year={2021} />
        </Stage>
      </MoonProvider>
    </MainProvider>
  );
};

export default Main;