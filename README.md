# Challenge COR

COR Challenge Alphabet Soup

## Install

```bash
git clone https://github.com/pablom555/CORChallenge.git
yarn install
```

## Run

Para ejecutar el proyecto

```bash
yarn start
```

## Test

Para Agregar casos de pruebas se debe declarar array en donde cada elemento
será uan fila y la cantidad de letras son las columnas, por ejemplo:

```javascript
const alphabetSoupThree = ["EAEAE", "AIIIA", "EIOIE", "AIIIA", "EAEAE"];
```

en este caso es una matriz de 5 x 5

Para ejecutarla solo debe agregarla al array test en el archivo app.js

```javascript
const test = [
  alphabetSoupOne,
  alphabetSoupTwo,
  alphabetSoupThree,
  alphabetSoupFour,
  alphabetSoupFive,
];
```
