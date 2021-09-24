const searchWordInAlphabetSoup = (f, c, rows, word) => {
  const lengthWord = word.length;
  let countWords = 0;
  const data = rows.map((row) => [...row]);

  for (let i = 0; i < f; i++) {
    for (let j = 0; j < c; j++) {
      if (data[i][j] === word[0]) {
        const combinations = generateCombinations(i, j, data, lengthWord);
        for (const property in combinations) {
          if (combinations[property].join("") === word) {
            countWords += 1;
          }
        }
      }
    }
  }
  return countWords;
};

const generateCombinations = (i, j, data, lengthWord) => {
  let result = {
    up: [],
    upRight: [],
    Right: [],
    RightDown: [],
    down: [],
    downLeft: [],
    left: [],
    leftUp: [],
  };

  for (let k = 0; k < lengthWord; k++) {
    if (i - k >= 0) {
      result["up"] = [...result["up"], data[i - k][j]];
    }
    if (i - k >= 0 && j + k < data[i].length) {
      result["upRight"] = [...result["upRight"], data[i - k][j + k]];
    }
    if (j + k < data[i].length) {
      result["Right"] = [...result["Right"], data[i][j + k]];
    }
    if (j + k < data[i].length && i + k < data.length) {
      result["RightDown"] = [...result["RightDown"], data[i + k][j + k]];
    }
    if (i + k < data.length) {
      result["down"] = [...result["down"], data[i + k][j]];
    }
    if (i + k < data.length && j - k >= 0) {
      result["downLeft"] = [...result["downLeft"], data[i + k][j - k]];
    }
    if (j - k >= 0) {
      result["left"] = [...result["left"], data[i][j - k]];
    }
    if (j - k >= 0 && i - k >= 0) {
      result["leftUp"] = [...result["leftUp"], data[i - k][j - k]];
    }
  }
  return result;
};

module.exports = {
  searchWordInAlphabetSoup,
};
