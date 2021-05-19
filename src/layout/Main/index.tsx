import React, { useEffect } from 'react';
import { Stage } from 'react-konva';
import WebFontLoader from "webfontloader";

import Calendar from '../../components/Calendar';

import MainProvider from '../../providers/MainProvider';
import MoonProvider from '../../providers/MoonProvider';

// main
const Main = () => {
  // Handle loading effects.
  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: [
          "Roboto Condensed:300,400,700",
          "Roboto Slab:200,300,400,500,600"
        ]
      },
      fontactive: () => {}
    });
  }, []);

  // render
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