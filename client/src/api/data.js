const dataPositionPaper = {
  unt2025: {
    studentId: [675, 107, 863, 380],
    key: [897, 102, 991, 376],
    partOne: [],
  },
};

const arrayPartOne = [];
let startX = 40;
let startY = 462;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 10; j++) {
    arrayPartOne.push([startX + 256 * i, startY + j * 27.5, 200, 26]);
  }
}
const arrayPartTwo = [];

let startXPart2 = 16;
let startYPart2 = 834;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    arrayPartTwo.push([
      startXPart2 + 36 + 256 * i,
      startYPart2 + j * 27.5,
      80,
      26,
    ]);
  }
  for (let j = 0; j < 4; j++) {
    arrayPartTwo.push([
      startXPart2 + 136 + 256 * i,
      startYPart2 + j * 27.5,
      80,
      26,
    ]);
  }
}

dataPositionPaper.unt2025.partOne = arrayPartOne;
dataPositionPaper.unt2025.partTwo = arrayPartTwo;
export default dataPositionPaper;
