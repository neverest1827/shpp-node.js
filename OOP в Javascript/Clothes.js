"use strict"

import { AbstractProduct } from "./AbstractProduct.js";

/**
 * Constructor function for creating a product card containing clothing
 * 
 * @param {string} id the product key (unique value)
 * @param {string} name the clothing name
 * @param {string} description the brief description
 * @param {number} price the clothing price
 * @param {number} quantity the number of available clothes
 * @param {object[]} reviews the clothing reviews
 * @param {string[]} images the clothing images
 * @param {object} date the date of creation of the clothing card
 * @param {string} brand the clothing brand
 * @param {string} material the material from which the clothes were made
 * @param {string} color is the color of clothing
 * @param {string[]} sizes the product sizes
 * @param {string} activeSize the product active size
 */
export function Clothes(id, name, description, price, quantity, reviews, images, date, brand, material, color, sizes, activeSize){
    AbstractProduct.call(this, id, name, description, price, quantity, reviews, images, date, brand)
    this._sizes = sizes;
    this._activeSize = activeSize;
    this._material = material;
    this._color = color;
}

Object.setPrototypeOf(Clothes.prototype, AbstractProduct.prototype);

Object.assign(Clothes.prototype, {
    // Getters and Setters
    setSizes(newSizes){
        this._sizes = newSizes;
    },

    getSizes(){
        return this._sizes;
    },

    setActiveSize(newActiveSize){
        this._activeSize = newActiveSize;
    },

    getActiveSize(){
        return this._activeSize;
    },

    setMaterial(newMaterial){
        this._material = newMaterial;
    },

    getMaterial(){
        return this._color;
    },

    setColor(newColor){
        this._color = newColor;
    },

    getColor(){
        return this._color;
    },

    /**
     * Adds a new value to the "sizes" array
     * 
     * @param {string} size the size to be added
     */
    addSize(size){
        this._sizes.push(size);
    },

    /**
     * Deletes a value from the "sizes" array by the specified key
     * 
     * @param {string} size the size to be deleted
     */
    deleteSize(size){
        for(let index = 0; index < this._sizes.length; index++){
            if(size === this._sizes[index]){
                this._sizes.splice(index, 1);
                break;
            };
        };
    },
})
