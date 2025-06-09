const sample = {
  0: { topLeft: [907, 116], bottomRight: [931, 140] },
  1: { topLeft: [907, 145], bottomRight: [931, 169] },
  2: { topLeft: [907, 174], bottomRight: [931, 198] },
  3: { topLeft: [907, 203], bottomRight: [931, 227] },
  4: { topLeft: [907, 232], bottomRight: [931, 256] },
  5: { topLeft: [907, 261], bottomRight: [931, 285] },
  6: { topLeft: [907, 290], bottomRight: [931, 314] },
  7: { topLeft: [907, 319], bottomRight: [931, 343] },
  8: { topLeft: [907, 348], bottomRight: [931, 372] },
  9: { topLeft: [907, 377], bottomRight: [931, 401] },
};
// const arrKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const start = {
//   topLeft: [907, 116],
//   bottomRight: [931, 140],
// };

// arrKey.forEach((key, index) => {
//   sample[`${key}`] = {
//     topLeft: [start.topLeft[0], start.topLeft[1] + 29 * index],
//     bottomRight: [start.bottomRight[0], start.bottomRight[1] + 29 * index],
//   };
// });
// console.log(JSON.stringify(sample));
// const mock = [];
// for (let i = 0; i < 4; i++) {
//   let obj = {};
//   Object.keys(sample).forEach((key) => {
//     obj[key] = {
//       topLeft: [sample[key].topLeft[0] + i * 30, sample[key].topLeft[1]],
//       bottomRight: [
//         sample[key].bottomRight[0] + i * 30,
//         sample[key].bottomRight[1],
//       ],
//     };
//   });
//   mock.push(obj);
// }

// console.log(JSON.stringify(mock));

const arr = [];
for (let i = 0; i < 6; i++) {
  const obj = {};
  Object.keys(sample).forEach((key) => {
    obj[key] = {
      topLeft: [sample[key].topLeft[0] + i * 30, sample[key].topLeft[1]],
      bottomRight: [
        sample[key].bottomRight[0] + i * 30,
        sample[key].bottomRight[1],
      ],
    };
  });

  arr.push(obj);
}

const fs = require("fs");

fs.writeFileSync("output.json", JSON.stringify(arr, null, 2), "utf-8");
