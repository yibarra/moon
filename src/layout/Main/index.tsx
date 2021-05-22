import { format, parse } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';
import { Stage } from 'react-konva';
import WebFontLoader from "webfontloader";

import Calendar from '../../components/Calendar';
import Footer from '../Footer';
import UseWindowSize from '../../uses/useWindowSize';

import { IMain } from './interfaces';

// date
const date: any = parse(format(new Date(2021, 4, 2), 'yyyy/MM/dd'), 'yyyy/MM/dd', new Date());

// main
const Main: FC<IMain> = () => {
  const size = UseWindowSize();

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
          today={date}
          setYear={setYear}
          year={year} />

        <Footer />
      </Stage>}
    </>
  );
};

export default Main;