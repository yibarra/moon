import React, { FC, useContext } from 'react';
import { useCallback } from 'react';

import InputSwitch from '../Form/InputSwitch';

import { LangContext } from '../../providers/LangProvider';

import './styles.scss';

// lang select
const LangSelect: FC<any> = () => {
  const { lang, langs, setLang }: any = useContext(LangContext);

  // on select lang
  const onSelectLang = useCallback(() => {
    const value = lang.value === langs[0].value ? langs[1] : langs[0];
    
    setLang(value);
  }, [ lang, langs, setLang ]);

  // render
  return (
    <div className="lang-select">
      <InputSwitch
        labelL={langs[0].name}
        labelR={langs[1].name}
        name="lang"
        value={lang?.value}
        onChange={onSelectLang} />
    </div>
  );
};

export default LangSelect;