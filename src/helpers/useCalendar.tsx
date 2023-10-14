const date = new Date();
const locale = 'en-US';

export const getYear = () => {
  return date.getFullYear();
};

export const getMonthName = () => {
  date.setMonth(date.getMonth());

  return date.toLocaleString(locale, {
    month: 'long',
  });
};

export const getDayNumber = () => {
  return date.getDate();
};

export const getDayName = () => {
  return date.toLocaleDateString(locale, { weekday: 'long' });
};

export const getPartOfDay = () => {
  return `Good ${
    date.getHours() >= 5 && date.getHours() < 12
      ? 'morning'
      : date.getHours() >= 12 && date.getHours() < 17
      ? 'afternoon'
      : date.getHours() >= 17 && date.getHours() < 21
      ? 'evening'
      : 'night'
  }`;
};
