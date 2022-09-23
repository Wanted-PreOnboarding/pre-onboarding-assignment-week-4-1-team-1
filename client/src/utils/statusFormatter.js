export const convertNumToStr = acccountStatus => {
  switch (acccountStatus) {
    case 1: {
      return '입금대비';
    }
    case 2: {
      return '운용중';
    }
    case 3: {
      return '투자중지';
    }
    case 4: {
      return '해지';
    }
    case 9999: {
      return '관리자확인필요';
    }
    default: {
      return acccountStatus;
    }
  }
};
