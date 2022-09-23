export const divisionList = (arr, n) => {
  const length = arr.length;
  const cut = Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
  const tmp = [];

  for (let i = 0; i < cut; i++) {
    tmp.push(arr.splice(0, n));
  }
  return tmp;
};
