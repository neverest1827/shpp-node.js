// Resultant expressions
const MAIL_REG_EXP = /^(?<firstpart>[a-z0-9][-.\+a-z0-9]{1,19})@(?<secondpart>[\w.!$%&’*+/=?^_-]{1,15})\.(?<end>\w{1,5})$/i;
const PHONE_REG_EXP = /^((\+38)?[\s\-]{0,4})?\(?(\d[\s\-]*){3}\)?[\s\-]?(\d[\s\-]*){1,3}(\d[\s\-]*){4}$/;
const PASSWORD_REG_EXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\d]{8,}$/;

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

/**
 * An object that has methods for validating email addresses, mobile phones, and access passwords
 */
const Validator = {
    /**
     * Checks the email address against a regular expression
     * 
     * @param {string} email the email address as a string
     * @returns boolean value of matching the mailing address to the regular expression 
     */
    validateEmail : function(email){
        return MAIL_REG_EXP.test(email);
    },
    
    /**
     * Checks the phone number against a regular expression
     * 
     * @param {string} phone the phone number as a string
     * @returns a boolean value of matching a phone number to a regular expression 
     */
    validatePhone : function(phone){
        return PHONE_REG_EXP.test(phone);
    },

    /**
     * Checks the password against a regular expression
     * 
     * @param {string} password the password as a string
     * @returns a boolean value of matching a password to a regular expression 
     */
    validatePassword : function(password){
        return PASSWORD_REG_EXP.test(password);
    }
}


//Tests
console.log('Test mail regular expression:');
for(let mail of MAILS){
    console.log(`This mail - ${mail} is valid?: ${Validator.validateEmail(mail)}`);
}
console.log('\n');

console.log('Test phone regular expression:');
for(let phone of PHONES){
    console.log(`This phone - ${phone} is valid?: ${Validator.validatePhone(phone)}`);
}
console.log('\n');

console.log('Test password regular expression:');
for(let password of PASSWORDS){
    console.log(`This phone - ${password} is valid?: ${Validator.validatePassword(password)}`);
}
