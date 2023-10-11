'use strict'

import { readCSV, getCitiesTop10 } from "./functions.js";

const FILE_PATH = './cities.csv';
const CSV_TEXT = readCSV(FILE_PATH);

console.log(getCitiesTop10(CSV_TEXT));
