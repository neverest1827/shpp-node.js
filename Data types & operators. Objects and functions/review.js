"use strict"

/**
 * Constructor for creating a review object
 * 
 * @param {string} id the review key
 * @param {string} author the review author
 * @param {object} date the date of creation of the review
 * @param {string} comment the review text
 * @param {object[]} rating the product rating
 */
export function Review(id, author, date, comment, rating){
    this._id = id;
    this._author = author;
    this._date = date;
    this._comment = comment;
    this._rating = rating;
} 

Object.assign(Review.prototype, {
    // Getters and setters

    setId(newId){
        this._id = newId;
    },

    getId(){
        return this._id;
    },

    setAuthor(newAuthor){
        this._author = newAuthor;
    },

    getAuthor(){
        return this._author;
    },

    setDate(newDate){
        this._date = newDate;
    },

    getDate(){
        return this._date;
    },

    setComment(newComment){
        this._comment = newComment;
    },

    getComment(){
        return this._comment;
    },

    setRating(newRating){
        this._rating = newRating;
    },

    getRating(){
        return this._rating;
    }
})
