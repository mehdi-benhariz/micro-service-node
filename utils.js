const fs = require("fs");

//read the user data from json file
exports.saveData = (data, db) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(`${db}.json`, stringifyData);
};
//get the user data from json file
exports.getData = (db) => {
  const jsonData = fs.readFileSync(`${db}.json`);
  return JSON.parse(jsonData);
};
