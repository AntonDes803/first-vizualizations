// рабочий код
// import "server-only";

// const dictionaries = {
//   uk: () => import("@/dictionaries/uk.json").then((m) => m.default),
//   ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
// };

// export const getDictionary = async (locale) => {
//   const loadDictionary = dictionaries[locale];
//   if (!loadDictionary) {
//     throw new Error(`Unsupported locale: ${locale}`);
//   }
//   return loadDictionary();
// };

//--------------------------------------------------------------------

// проверить не выдает ли ошибок єтот код и если все норм - использовать его
// код, которій необходимо протестировать
import "server-only";

const dictionaries = {
  uk: () => import("@/dictionaries/uk.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale) => await dictionaries[locale]();
