import React, { FC, useContext } from 'react';
import { Stage } from 'react-konva';

import Calendar from '../../components/Calendar';
import Particles from 'react-particles-js';

import Header from '../Header';
import Footer from '../Footer';

import { MainContext } from '../../providers/MainProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IMain } from './interfaces';

import './styles.scss';

// main
const Main: FC<IMain> = () => {
  const { loaded, date, setDate, size, radius, setRadius } = useContext(MainContext);
  const { theme } = useContext(ThemeContext);

  // render
  return (
    <section
      className="main"
      style={{ backgroundColor: theme.main }}>
      <div className="main--bg">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 60,
                "density": {
                  "enable": true,
                  "value_area": size.width
                }
              },
              "line_linked": {
                "enable": false
              },
              "color": theme.second,              
              "move": {
                "direction": "right",
                "speed": 0.05
              },
              "size": {
                "value": 1
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
                }
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "push": {
                  "particles_nb": 1
                }
              }
            },
            "retina_detect": true
          }} />
      </div>

      <Header
        radius={radius}
        setRadius={setRadius} />

      {loaded &&
        <Stage
          height={size.height}
          width={size.width}>
          <Calendar
            radius={radius}
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