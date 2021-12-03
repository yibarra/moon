import React, { FC, useState, createContext, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import { ILang, ILangContext, ILangProvider } from './interfaces';

// lang context
const LangContext = createContext({} as ILangContext);

// lang provider
const LangProvider: FC<ILangProvider> = ({
  children
}) => {
  const langs: any[] = [{
    name: 'Quechua',
    value: 'qu'
  }, {
    name: 'Gregorian',
    value: 'en'
  }];

  const { i18n } = useTranslation();
  const [ lang, setLang ] = useState<ILang>(langs[1]); // lang

  // use effect
  useEffect(() => {
    i18n.changeLanguage(lang?.value);
  }, [ lang, i18n ]);

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