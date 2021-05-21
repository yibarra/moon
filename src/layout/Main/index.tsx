import { format } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';
import { Stage } from 'react-konva';
import WebFontLoader from "webfontloader";

import Calendar from '../../components/Calendar';

// main
const Main: FC<any> = () => {
  const [ loaded, setLoaded ] = useState<boolean>(false); // loaded
  const [ date ] = useState<any>(format(new Date(), 'yyyy-MM-dd'));
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
    <>
      {loaded && <Stage
          height={window.innerHeight}
          width={window.innerWidth}>
        <Calendar
          today={date}
          setYear={setYear}
          year={year} />
      </Stage>}
    </>
  );
};

export default Main;