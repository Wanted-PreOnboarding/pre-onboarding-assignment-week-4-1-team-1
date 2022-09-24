//money 파라미터는 반드시 string값으로 들어와야 합니당
export const moneyFormatter = money => {
  let flag = '+';
  let strMoney = money;
  if (typeof strMoney !== 'string') return money;
  if (money[0] === '-') {
    flag = '-';
    strMoney = strMoney.slice(1);
  }

  const moneyLength = strMoney.length - 3;
  const numOfComma = Math.floor(moneyLength / 3);

  if (numOfComma < 1) return money;
  const arrMoney = [...strMoney];
  const secondNum = arrMoney.pop();
  const firstNum = arrMoney.pop();
  const dot = arrMoney.pop();
  if (dot !== '.') return money;

  const newMoneyArr = [];
  for (let i = 1; i <= moneyLength; i++) {
    const moneyNum = arrMoney.pop();
    newMoneyArr.push(moneyNum);
    if (i % 3 === 0 && i !== moneyLength) {
      newMoneyArr.push(',');
    }
  }

  let finalMoney = newMoneyArr.reverse().join('') + dot + firstNum + secondNum;
  if (flag === '-') {
    return flag + finalMoney;
  } else {
    return finalMoney;
  }
};
