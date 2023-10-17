import moment from 'moment';

export const usePublishedTime = (publishedTime: string) => {
  const newsDate = moment(new Date(publishedTime), 'MM/DD/YYYY hh:mm');
  const dateNow = moment(new Date(), 'MM/DD/YYYY hh:mm');

  return moment(newsDate).from(dateNow);
};

export const useCurrentDate = () => {
  return moment().format('dddd, MMMM D, YYYY');
};

export const usePartOfDay = () => {
  return `Good ${
    moment().hour() >= 5 && moment().hour() < 12
      ? 'morning'
      : moment().hour() >= 12 && moment().hour() < 17
      ? 'afternoon'
      : moment().hour() >= 17 && moment().hour() < 21
      ? 'evening'
      : 'night'
  }`;
};
