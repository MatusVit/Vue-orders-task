export const getDateFromDeliveryObjectUtil = (object) => {
  const stringDateObject = `${object.date} ${object.interval.split(' ').splice(-1)}`;
  return new Date(stringDateObject);
};
