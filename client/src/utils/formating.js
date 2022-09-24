export const getAssetPattern = number => {
  return Math.floor(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function getSimpleDatePattern(date) {
  const formattedDate = new Date(date);

  const yyyy = formattedDate.getFullYear();
  const mm = formattedDate.getMonth();
  const dd = formattedDate.getDate();

  const transferedDate = yyyy + '년 ' + (mm + 1) + '월 ' + dd + '일';

  return transferedDate;
}
