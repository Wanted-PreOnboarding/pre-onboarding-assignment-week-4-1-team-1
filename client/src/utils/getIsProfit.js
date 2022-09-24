export const getIsProfit = (deposit, current) => {
  if (current < deposit) return 'red';
  if (current > deposit) return 'blue';
  if (current === deposit) return 'black';
};
