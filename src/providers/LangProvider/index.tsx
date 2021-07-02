import React, { FC, useState } from 'react';
import { createContext } from 'react';

import { ILangContext, ILangProvider } from './interfaces';

// lang context
const LangContext = createContext({} as ILangContext);

// lang provider
const LangProvider: FC<ILangProvider> = ({
  children
}) => {
  const langs: any[] = [{
    name: 'Quechua',
    value: 'quechua'
  }, {
    name: 'Default',
    value: 'default'
  }];

  const [ lang, setLang ] = useState<any>(langs[0]); // lang

  // render
  return (
    <LangContext.Provider
      value={{
        lang,
        langs,
        setLang
      }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext, LangProvider };
export default LangProvider;