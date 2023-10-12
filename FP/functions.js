'use strict';

import * as fs from "node:fs";

/**
 * Reads an CSV file and returns it as a string
 * 
 * @param {string} filePath the path where the file is located
 * @returns file text as a string
 */
export function readCSV(filePath){
    try {
        return fs.readFileSync(filePath, { encoding: "utf-8" })
      } catch (err) {
        console.error(err);
      }
}

/**
 * A closure is used. Converts the text of the CSV file to the required format and returns 
 * a function that replaces the names of cities with a special string
 * 
 * @param {string} csvText the CSV file text
 */
export function parseCSV(csvText){
  let rating = 1;
  const procesedCSV = csvText
  .split('\r\n')
  .filter( item => !item.startsWith('#') && item ) // '' -> false
  .map( row => {
    let [x, y, city, population] = row.split(','); // destructuring
    return {x, y, city, population};
  })
  .sort( (a, b) => parseInt(b.population) - a.population ) // a cast to number self
  .slice(0,10)
  .reduce( (result, objRow) => {
    result[objRow.city] = {population: objRow.population, rating: rating++};
    return result; // Need to return the object itself so that you can add to it
  }, {});
  
  return someText => {
    const regex = new RegExp(Object.keys(procesedCSV).join('|'), 'ig');
    return someText.replace(regex, (city) => {
      return `${city} (${procesedCSV[city].rating} місце в ТОП-10 найбільших міст України, населення ${procesedCSV[city].population} чоловік)`
    });
  }; 
}
