export const maskingName = strName => {
  if (strName.length > 2) {
    let originName = strName.split('');
    originName.forEach(function (name, i) {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = '*';
    });
    let joinName = originName.join();
    return joinName.replace(/,/g, '');
  } else {
    let pattern = /.$/; // 정규식
    return strName.replace(pattern, '*');
  }
};

export const maskingPhoneNumber = phoneNumber => {
  return phoneNumber.replace(/\-.*\-/, '-****-');
};

export const maskingAccount = account => {
  const prefix = account.slice(0, 2);
  const surfix = account.slice(-2);
  let body = "";
  for (let i = 0; i < account.length - 4; i++) {
    body += "*";
  }
  return [prefix, body, surfix].join("");
}
