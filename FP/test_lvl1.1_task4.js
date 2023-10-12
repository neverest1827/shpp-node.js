'use strict'

import { readCSV, parseCSV } from "./functions.js";

const FILE_PATH = './cities.csv';
const CSV_TEXT = readCSV(FILE_PATH);

// Get closures
const editText = parseCSV(CSV_TEXT);

// Tests
console.log(editText("Біла Церква це місто України"));
console.log(editText("Одеса мама! (тут має грати музика)"));
console.log(editText("Полянський князь Кий з братами Щеком і Хоривом, а також сестрою Либіддю заснували Київ"));
console.log(editText("Кропивницький це місто якому не страшний блекаут тому що від уранових шахт у людей є вмонтована підсвітка"));
console.log(editText("Алушта не входить в цей рейтинг"));
