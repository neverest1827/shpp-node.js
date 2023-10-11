"use strict"

import { Review } from "../Data types & operators. Objects and functions/Review.js";

/**
 * A constructor function for creating an abstract product card that implements the getFullInformation(), 
 * getPriceForQuantity(), and handleField() functions
 * 
 * @param {string} id the product key (unique value)
 * @param {string} name the product name
 * @param {string} description the brief description
 * @param {number} price the product price
 * @param {number} quantity the number of available product
 * @param {object[]} reviews the product reviews
 * @param {string[]} images the product images
 * @param {object} date the date of creation of the product card
 * @param {string} brand the product brand
 */
export function AbstractProduct(id, name, description, price, quantity, reviews, images, date, brand){
    this._id = id;
    this._name = name;
    this._description = description;
    this._price = price;
    this._quantity = quantity;
    this._reviews = reviews;
    this._images = images;
    this._date = date;
    this._brand = brand; 
}

Object.assign(AbstractProduct.prototype, {
    getId(){
        return this._id;
    },

    setId(newId){
        this._id = newId;
    },

    getName(){
        return this._name;
    },

    setName(newName){
        this._name = newName;
    },

    getDescription(){
        return this._description;
    },

    setDescription(newDescription){
        this._description = newDescription;
    },

    getPrice(){
        return this._price;
    },

    setPrice(newPrice){
        this._price = newPrice;
    },

    getQuantity(){
        return this._quantity;
    },

    setQuantity(newQuantity){
        this._quantity = newQuantity;
    },

    getReviews(){
        return this._reviews;
    },

    setReviews(newReviews){
        this._reviews = newReviews;
    },

    getImages(){
        return this._images;
    },

    setImages(newImages){
        this._images = newImages;
    },

    getDate(){
        return this._date;
    },

    setDate(newDate){
        this._date = newDate;
    },

    getBrand(){
        return this._brand;
    },

    setBrand(newBrand){
        this._brand = newBrand;
    },


    /**
     * Returns the "review" object by the given key
     * 
     * @param {string} reviewId the key by which the search will be performed
     * @returns the object of the review that meets the requirements
     */
    getReviewByID(reviewId){
        for(let review of this._reviews){
            if(review.getId() === reviewId) {
                return review;
            };
        };
    },

    /**
     * Returns the picture according to the passed parameter, if the parameter was not passed then the first picture from the array
     * 
     * @param {number} numImage the number of the photo requested by the user
     * @returns image as string
     */
    getImage(numImage){
        if(numImage === undefined) return this._images[0];
        return this._images[numImage];
    },


    /**
     * Adds a "reviews" object to the "reviews" array
     * 
     * @param {string} id the review key
     * @param {string} author the review author
     * @param {Date} date the date of creation of the review
     * @param {string} comment the review text
     * @param {object[]} rating the product rating
     */
    addReview(id, author, date, comment, rating){
        this._reviews.push(new Review(id, author, date, comment, rating));
    },

    /**
     * Deletes the "reviews" object from the "reviews" array by the specified key (ID)
     * 
     * @param {string} reviewId the review key
     */
    deleteReview(reviewId){
        for(let index = 0; index < this._reviews.length; index++){
            if (reviewId === this._reviews[index].getId()){
                this._reviews.splice(index, 1);
            };
        };
    },

    /**
     * Returns the average rating of the product
     * 
     * @returns the average rating of the product
     */
    getAveregeRating(){
        let totalCount = 0;
        let totalReviewScore = 0;

        for(let review of this._reviews){
            let rating = review.getRating();
            let keys = Object.keys(rating)
            for(let keyNumber = 0; keyNumber < keys.length; keyNumber++){
                // Get the value for the key that we take from the key array
                totalReviewScore += rating[ keys[keyNumber] ];
                totalCount++;
            }
        }
        
        return totalReviewScore / totalCount;
    },

    /**
     * Collects information about the object's fields and returns a string
     * 
     * @returns a string containing the values of all available properties.
     */
    getFullInformation(){
        let result = '';

        for(let key in this){
            if (this.hasOwnProperty(key)) {
                result += `${key.substring(1)} : ${this[key]}\n`;
            }
        }
        
        return result;
    },

    /**
     * Calculates the cost of a certain amount of goods and returns the value in a specific format
     * 
     * @param {number} num the number of units of goods
     * @returns  the price for n products of this type
     */
    getPriceForQuantity(num){
        return `$${this._price * num}`;
    },

    /**
     * Searches for the provided object field name and returns it value. If an additional parameter is passed, 
     * the value of the object field will be changed to this value
     * 
     * @param {string} fieldName the name of the object field that you want to get or change
     * @param {*} newValue the new value for the object field 
     * @returns the value of the object field, or a boolean value as evidence that the field has been changed
     */
    handleField(fieldName, newValue){
        for(let key in this){
            if (this.hasOwnProperty(key) && key.substring(1) === fieldName){
                if(newValue){ // Because undefined -> false, some value -> true
                    this[key] = newValue;
                    return true;
                } else {
                    return this[key];
                }
            }
        }
    }
})
