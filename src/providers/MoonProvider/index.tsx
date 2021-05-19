import React, { createContext, FC } from 'react';

// context
const MoonContext = createContext({});

// moon provider
const MoonProvider: FC<any> = ({ children }) => {
  // render
  return (
    <MoonContext.Provider
      value={{

      }}>
      {children}
    </MoonContext.Provider>
  );
};

export default MoonProvider;