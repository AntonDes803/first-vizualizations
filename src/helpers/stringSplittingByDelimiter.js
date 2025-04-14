export const stringSplittingByDelimiter = (str, delimiter) => {
  // Ищем индекс символа-разделителя
  const delimiterIndex = str.indexOf(delimiter);
  // Если символ не найден — возвращаем исходную строку
  if (delimiterIndex === -1) {
    return [str];
  }
  // Разбиваем строку на три части
  const before = str.slice(0, delimiterIndex);
  const after = str.slice(delimiterIndex + delimiter.length); // на случай, если разделитель будет больше 1 символа
  return [before, delimiter, after];
};
