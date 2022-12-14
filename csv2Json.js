const fs = require("fs/promises");
const path = require("path");

function csv2Json(csv) {
  const array = csv.toString().split("\n");
  const keys = array.shift().trim().split(",");

  const values = array.map((csvString) => csvString.trim().split(","));

  const jsonResult = values.map((data) => {
    data = data.length === 14 ? data : [data[0] + data[1], ...data.slice(-13)];

    const array2Obj = data.reduce((obj, value, index) => {
      const key = keys[index];
      return { ...obj, [key]: value };
    }, {});
    return array2Obj;
  });

  return JSON.stringify(jsonResult);
}

(async () => {
  const csv = await fs.readFile("./JNF_DATA.csv");
  const json = csv2Json(csv);

  const filePath = path.resolve(__dirname);
  fs.writeFile(`${filePath}/JNF_DATA.json`, json);
})();
