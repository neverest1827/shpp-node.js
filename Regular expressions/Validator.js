"use strict"

/**
 * An object that has methods for validating email addresses, mobile phones, and access passwords
 */
export const Validator = {
    mailRegExp : /^(?<firstpart>[a-z0-9][-.\+a-z0-9]{1,19})@(?<secondpart>[\w.!$%&’*+/=?^_-]{1,15})\.(?<end>\w{1,5})$/i,
    phoneRegExp : /^((\+38)?[\s\-]{0,4})?\(?(\d[\s\-]*){3}\)?[\s\-]?(\d[\s\-]*){1,3}(\d[\s\-]*){4}$/,
    passwordRegExp : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\d]{8,}$/,

    /**
     * Checks the email address against a regular expression
     * 
     * @param {string} email the email address as a string
     * @returns boolean value of matching the mailing address to the regular expression 
     */
    validateEmail : function(email){
        return this.mailRegExp.test(email);
    },
    
    /**
     * Checks the phone number against a regular expression
     * 
     * @param {string} phone the phone number as a string
     * @returns a boolean value of matching a phone number to a regular expression 
     */
    validatePhone : function(phone){
        return this.phoneRegExp.test(phone);
    },

    /**
     * Checks the password against a regular expression
     * 
     * @param {string} password the password as a string
     * @returns a boolean value of matching a password to a regular expression 
     */
    validatePassword : function(password){
        return this.passwordRegExp.test(password);
    }
}
