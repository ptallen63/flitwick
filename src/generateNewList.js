export default function (matchArray, matchToData, fieldsObj, matchField) {
  const newList = [];
  newList.push(fieldsObj);

  // Check file 1 against file 2

  matchArray.forEach((item) => {
    const match = matchToData[item];
    if (match) {
      match.matched = true;
      newList.push(match);
    } else {
      newList.push({
        [matchField]: item,
        matched: false,
      });
    }
  });
  return newList;
}
