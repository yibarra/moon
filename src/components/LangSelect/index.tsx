import React, { FC, useContext } from 'react';
import { useCallback } from 'react';

import InputSwitch from '../Form/InputSwitch';

import { LangContext } from '../../providers/LangProvider';

import './styles.scss';

// lang select
const LangSelect: FC<any> = () => {
  const { lang, langs, setLang }: any = useContext(LangContext);

  const onSelectLang = useCallback(() => {
    console.log('change');
  }, []);

  return (
    <div className="lang-select">
      <InputSwitch
        labelL={langs[0].name}
        labelR={langs[1].name}
        name="color"
        value={lang?.name}
        onChange={onSelectLang} />
    </div>
  );
};

export default LangSelect;