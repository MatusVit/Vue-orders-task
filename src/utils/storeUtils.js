export const getDateFromDeliveryObjectUtil = object => {
  const stringDateObject = `${object.date} ${object.interval.split(' ').splice(-1)}`;
  return new Date(stringDateObject);
};

export const getMaxIdFromArray = array => {
  if (array.length === 0) return 0;
  return array.reduce((maxId, object) => {
    if (object.id > maxId) return object.id;
    return maxId;
  }, 0);
};
