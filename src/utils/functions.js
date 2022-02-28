export const validateAllIndividualBoxes = (board, isRow) => {
  let wrongLines = [];
  for (let i = 0; i < 9; i++) {
    let tmpObj = {};
    for (let j = 0; j < 9; j++) {
      let key;
      if (isRow) key = board[i][j].value;
      else key = board[j][i].value;
      if (key === 0) continue;
      if (Object.hasOwnProperty.call(tmpObj, key)) {
        tmpObj[key] += 1;
        if (tmpObj[key] > 1) {
          wrongLines.push(i);
          break;
        }
      } else tmpObj[key] = 1;
    }
  }
  return wrongLines;
}

export const isBoxValid = (board, x0, y0) => {
  let tmpObj = {};
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let key = board[x0 + i][y0 + j].value;
      if (key === 0) continue;
      if (Object.hasOwnProperty.call(tmpObj, key)) {
        tmpObj[key] += 1;
        if (tmpObj[key] > 1) {
          return false;
        }
      } else tmpObj[key] = 1;
    }
  }
  return true;
}

export const getinValidBoxes = (board) => {
  let inValidBoxes = [];
  let boxValues = {
    0: { x: 0, y: 0 },
    1: { x: 0, y: 3 },
    2: { x: 0, y: 6 },
    3: { x: 3, y: 0 },
    4: { x: 3, y: 3 },
    5: { x: 3, y: 6 },
    6: { x: 6, y: 0 },
    7: { x: 6, y: 3 },
    8: { x: 6, y: 6 },
  };

  // We check for every boxes
  for (let box = 0; box < 9; box++) {
    // Now check all cells of the selected box
    let x0 = boxValues[box].x;
    let y0 = boxValues[box].y;

    if (!isBoxValid(board, x0, y0)) {
      inValidBoxes.push(box);
    }
  }

  return inValidBoxes;
}

export const board = [
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }],
  [{ isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }, { isValid: true, value: 0 }]
]