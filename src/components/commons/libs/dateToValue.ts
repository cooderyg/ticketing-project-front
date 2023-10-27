export const dateToValue = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return new Date(year, month, day).valueOf();
};
