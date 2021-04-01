const fs = require("fs");
const transform = require("./transform");
const map = require("./map");
const mapSampleData = require("./input/map.data");
const transformSampleDataOne = require("./input/transform.data-1");
const transformSampleDataTwo = require("./input/transform.data-2");

const transformSampleOne = transform(
  transformSampleDataOne.inputDataOne,
  transformSampleDataOne.dataModelOne
);
const transformSampleOneStr = JSON.stringify(transformSampleOne, null, 2);
console.log(transformSampleOneStr);
fs.writeFileSync("./output/transformSampleOne.json", transformSampleOneStr);

const transformSampleTwo = transform(
  transformSampleDataTwo.inputDataTwo,
  transformSampleDataTwo.dataModelTwo
);
const transformSampleTwoStr = JSON.stringify(transformSampleTwo, null, 2);
console.log(transformSampleTwoStr);
fs.writeFileSync("./output/transformSampleTwo.json", transformSampleTwoStr);

const mapSample = map(mapSampleData);
const mapSampleStr = JSON.stringify(mapSample, null, 2);
console.log(mapSampleStr);
fs.writeFileSync("./output/mapSample.json", mapSampleStr);
