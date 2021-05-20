import React, { FC, useEffect, useState } from 'react';
import { Stage } from 'react-konva';
import WebFontLoader from "webfontloader";

import Calendar from '../../components/Calendar';
import MainProvider from '../../providers/MainProvider';

// main
const Main: FC<any> = () => {
  const [ loaded, setLoaded ] = useState<boolean>(false); // loaded
  const [ year, setYear ] = useState<number>(2021);

  // Handle loading effects.
  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: [
          "Roboto Condensed:300,400,700",
          "Roboto Slab:200,300,400,500,600"
        ]
      }, fontactive: () => {
        setTimeout(() => {
          setLoaded(true);
        }, 1000);
      }
    });
  }, []);

  // render
  return (
    <MainProvider>
      {loaded && <Stage
          height={window.innerHeight}
          width={window.innerWidth}>
        <Calendar
          setYear={setYear}
          year={year} />
      </Stage>}
    </MainProvider>
  );
};

export default Main;