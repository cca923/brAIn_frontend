export const percentageValue = (value) => {
  const percentage = Math.min(100, Math.max(0, Math.round(+value)));
  return percentage;
};
