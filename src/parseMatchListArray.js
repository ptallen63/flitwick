export default function (array) {
  const newArray = [];
  array.forEach((record) => {
    if (record[0] !== '') {
      newArray.push(record[0]);
    }
  });
  return newArray;
}
