export const generateYearsArray = (from, to) => {
  const years = [];

  for (let year = from; year <= to; year++) {
    years.push(year.toString());
  }

  return years;
};
