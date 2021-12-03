import React, { FC, useCallback } from 'react';

import InputSwitch from '../Form/InputSwitch';

import { ILangSelect } from './interfaces';

import { LangSelectDiv } from './styles';

// lang select
const LangSelect: FC<ILangSelect> = ({
  lang,
  langs,
  setLang
}) => {
  // on select lang
  const onSelectLang = useCallback(() => {
    const value = lang.value === langs[0].value ? langs[1] : langs[0];
    
    setLang(value);
  }, [ lang, langs, setLang ]);

  // render
  return (
    <LangSelectDiv>
      <InputSwitch
        labelL={langs[1].name}
        labelR={langs[0].name}
        name="lang"
        value={lang?.value}
        onChange={onSelectLang} />
    </LangSelectDiv>
  );
};

export default LangSelect;