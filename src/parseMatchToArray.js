export default function (array,matchField){
  let newObject = {}
  let fields = [];

  array.forEach((record) => {
    if(record === array[0]){
      array[0].forEach(field => fields.push(field.trim()))
    }
    else {
      let obj = {}
      let count = 0
      record.forEach(f => {
        obj[fields[count]] = f;
        count++
      });

      const e = obj[matchField];
      if (e){

        newObject[e] = obj;
      }

    }

  });

  let fieldsObj = {}
  fields.forEach(f => {
    fieldsObj[f] = null;
  })
  fieldsObj.matched = null;

  return {
    data: newObject,
    fields:fieldsObj
  }
}
