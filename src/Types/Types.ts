export type languageType = {
  id: number;
  languageCode: "en" | "es" | "ja" | "gu";
  language: "english" | "española" | "日本" | 'ગુજરાતી';
};
export type LangProviderValueType = {
  lang: languageType;
  langHandler?: ({ id, languageCode, language }: languageType) => void;
};

export type LangProviderType = {
  children: React.ReactNode;
};

export type SliderProductsType = {
  id: number,
  name: string,
  detail: string,
  price: number,
  img: string,
}