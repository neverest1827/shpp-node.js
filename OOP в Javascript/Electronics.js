"use strict"

import { AbstractProduct } from "./AbstractProduct.js";

/**
 * Constructor function for creating an electronic product card
 * 
 * @param {string} id the product key (unique value)
 * @param {string} name the electronic name
 * @param {string} description the brief description
 * @param {number} price the electronic price
 * @param {number} quantity the number of available electronic
 * @param {object[]} reviews the electronic reviews
 * @param {string[]} images the electronic images
 * @param {object} date the date of creation of the electronic card
 * @param {string} brand the electronic brand
 * @param {number} warranty the number of years of warranty
 * @param {string} power the power of the electronic device
 */
export function Electronics(id, name, description, price, quantity, reviews, images, date, brand, warranty, power){
    AbstractProduct.call(this, id, name, description, price, quantity, reviews, images, date, brand)
    this._warranty = warranty;
    this._power = power;
}

Object.setPrototypeOf(Electronics.prototype, AbstractProduct.prototype);

Object.assign(Electronics.prototype, {
    getWarranty(){
        return this._color;
    },

    setWarranty(newWarranty){
        this._warranty = newWarranty;
    },

    getPower(){
        return this._power;
    },

    setPower(newPower){
        this._power = newPower;
    }
})
