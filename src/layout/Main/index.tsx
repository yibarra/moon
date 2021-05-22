import { format, parse } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';
import { Stage } from 'react-konva';
import WebFontLoader from "webfontloader";

import Calendar from '../../components/Calendar';
import Footer from '../Footer';
import UseWindowSize from '../../uses/useWindowSize';

import { IMain } from './interfaces';

// date

// main
const Main: FC<IMain> = () => {
  const size = UseWindowSize();

  const date = format(new Date(), 'yyyy/M/dd'); // current
  const [ today, setToday ]: any = useState<any>(parse(date, 'yyyy/M/dd', new Date()));

  const [ loaded, setLoaded ] = useState<boolean>(false); // loaded
  const [ year, setYear ] = useState<number>(2021);

  // Handle loading effects.
  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: [
          "Roboto Condensed:300,400,700",
          "Roboto Slab:200,300,400,500,600",
          "Roboto:200,300,400"
        ]
      }, fontactive: () => {
        setTimeout(() => setLoaded(true), 1000);
      }
    });
  }, []);

  // render
  return (
    <>
      {loaded && <Stage
          height={size.height}
          width={size.width}>
        <Calendar
          today={today}
          setToday={setToday}
          setYear={setYear}
          year={year} />

        <Footer />
      </Stage>}
    </>
  );
};

export default Main;