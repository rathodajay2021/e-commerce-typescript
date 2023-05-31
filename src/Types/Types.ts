export type languageType = {
  id: number;
  languageCode: "en" | "es";
  language: "english" | "española";
};
export type LangProviderValueType = {
  lang: languageType;
  langHandler?: ({ id, languageCode, language }: languageType) => void;
};

export type LangProviderType = {
  children: React.ReactNode;
};
