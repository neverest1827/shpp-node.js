"use strict"

import { Validator } from "./Validator.js";

const NEXT_ROW = '\n'

/**
 * Array of test cases for email addresses
 */
const MAILS = [
    'fi@secondpart.end', 
    'first-part@.se=cond%p.art.end', 
    'first.part@se=cond%part.r',
    'f@secondart.end,', 
    'first-part@.se=cond@part.end', 
    '-firstpart@.se=cond%.enddeded', 
    'firs_tpart@.se.en', 
    'firstpart@.se.enddeded'
];

/**
 * Array of test cases for a phone number
 */
const PHONES = [
    '+38 (099) 567 8901',
    '+38 099 5 6 7 8 9  01',
    '(09-9) 567-890-1',
    '--  (099) 567 890-1',
    '+38 (099) 567 8901 0',
    '+38 099 a0000000',
    '+38 (0989) 567 8901',
    '+48 (0989) 567 8901'
];

/**
 * Array of test cases for a password
 */
const PASSWORDS = [
    'C00l_Pass',
    'SupperPas1',
    'Cool_pass',
    'C00l'
];

//Tests
console.log('Test mail regular expression:');
for(let mail of MAILS){
    console.log(`This mail - ${mail} is valid?: ${Validator.validateEmail(mail)}`);
}

console.log(`${NEXT_ROW}Test phone regular expression:`);
for(let phone of PHONES){
    console.log(`This phone - ${phone} is valid?: ${Validator.validatePhone(phone)}`);
}

console.log(`${NEXT_ROW}Test password regular expression:`);
for(let password of PASSWORDS){
    console.log(`This phone - ${password} is valid?: ${Validator.validatePassword(password)}`);
}