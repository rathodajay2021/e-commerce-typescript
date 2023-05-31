//CORE
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

//CUSTOM
import {
  LangProviderType,
  LangProviderValueType,
  languageType,
} from "Types/Types";

const LanguageContext = React.createContext<LangProviderValueType>({
  lang: { id: 1, languageCode: "en", language: "english" },
});

export const useLang = () => {
  return useContext(LanguageContext);
};

export const LangProvider = ({ children }: LangProviderType) => {
  const { i18n } = useTranslation();
  const [langState, setLangState] = useState<languageType>({
    id: 1,
    languageCode: "en",
    language: "english",
  });

  const langHandler = (argumentObj: languageType): void => {
    i18n.changeLanguage(argumentObj.languageCode);
    setLangState(argumentObj);
  };

  const LangProviderValue: LangProviderValueType = {
    lang: langState,
    langHandler,
  };
  return (
    <LanguageContext.Provider value={LangProviderValue}>
      {children}
    </LanguageContext.Provider>
  );
};
