import { introduceEN, navigateEN, titleEN } from "./resourceEN";
import { introduceVN, navigateVN, titleVN } from "./resourceVN";

export const languageOptions = {
  vi: {
    language: "vi",
    navigate: navigateVN,
    introduce: introduceVN,
    title: titleVN,
  },
  en: {
    language: "en",
    navigate: navigateEN,
    introduce: introduceEN,
    title: titleEN,
  },
};
