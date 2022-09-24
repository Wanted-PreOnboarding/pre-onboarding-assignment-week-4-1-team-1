export const getIsProfit = (deposit, current) => {
  if (current < deposit) return 'red';
  if (current > deposit) return 'blue';
  if (current === deposit) return 'black';
};

// 계산된 결과 인자 1개만 들어올 경우
export const changeColor = number => {
  if (number > 0) {
    return 'red';
  } else if (number < 0) {
    return 'blue';
  }
};
