const { searchWordInAlphabetSoup } = require("./src/alphabetSoup");

// Casos de prueba
const alphabetSoupOne = ["OIE", "IIX", "EXE"];
const alphabetSoupTwo = ["EIOIEIOEIO"];
const alphabetSoupThree = ["EAEAE", "AIIIA", "EIOIE", "AIIIA", "EAEAE"];
const alphabetSoupFour = ["OX", "IO", "EX", "II", "OX", "IE", "EX"];
const alphabetSoupFive = ["E"];

// Agregar sopas de letra a este array de test
const test = [
  alphabetSoupOne,
  alphabetSoupTwo,
  alphabetSoupThree,
  alphabetSoupFour,
  alphabetSoupFive,
];

test.forEach((test) =>
  console.log(
    searchWordInAlphabetSoup(test.length, test[0].length, test, "OIE")
  )
);
