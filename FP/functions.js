'use strict';

import * as fs from "node:fs";

/**
 * 
 * @param {string} filePath 
 * @returns 
 */
export function readCSV(filePath){
    try {
        return fs.readFileSync(filePath, { encoding: "utf-8" })
      } catch (err) {
        console.error(err);
      }
}

/**
 * 
 * @param {string} csvText 
 */
export function getCitiesTop10(csvText){
    csvText
    .split('\r\n')
    .filter( item => !item.startsWith('#') && item ) // '' -> false
    .map( text => text.split(','))
    .sort( (a, b) => parseInt(b[3]) - a[3]) // a cast to number self
    .slice(0,10)
    .reduce( (result, element) => (result + {x:element[0], y:element[1]}), {});

    return csvText => csvText; 
}