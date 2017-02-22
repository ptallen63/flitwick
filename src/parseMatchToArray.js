export default function (array, matchField) {
  if (typeof array !== 'object') {
    return -1;
  }

  const matchFieldPosition = array[0].indexOf(matchField);
  try {
    if (matchFieldPosition === -1) throw new Error('Match Field not Found');
  } catch (err) {
    /* eslint-disable no-console */
    console.log(err);
    return -1;
  }

  // Get Fields position

  const newObject = {};
  const fields = [];

  array.forEach((record) => {
    if (record === array[0]) {
      array[0].forEach(field => fields.push(field.trim()));
    } else {
      const obj = {};
      let count = 0;
      record.forEach((f) => {
        obj[fields[count]] = f;
        count += 1;
      });

      const e = obj[matchField];
      if (e) {
        newObject[e] = obj;
      }
    }
  });
  const fieldsObj = {};
  fields.forEach((f) => {
    fieldsObj[f] = null;
  });
  fieldsObj.matched = null;

  return { data: newObject, fields: fieldsObj };
}
