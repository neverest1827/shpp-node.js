/**
 * Constructor for creating a review object
 * 
 * @param {string} id the review key
 * @param {string} author the review author
 * @param {Date} date the date of creation of the review
 * @param {string} comment the review text
 * @param {object[]} rating the product rating
 */
export function Review(id, author, date, comment, rating){
    this._id = id;
    this._author = author;
    this._date = date;
    this._comment = comment;
    this._rating = rating;

    // Getters and setters

    this.setId = function(newId){
        this._id = newId;
    }

    this.getId = function(){
        return this._id;
    }

    this.setAuthor = function(newAuthor){
        this._author = newAuthor;
    }

    this.getAuthor = function(){
        return this._author;
    }

    this.setDate = function(newDate){
        this._date = newDate;
    }

    this.getDate = function(){
        return this._date;
    }

    this.setComment = function(newComment){
        this._comment = newComment;
    }

    this.getComment = function(){
        return this._comment;
    }

    this.setRating = function(newRating){
        this._rating = newRating;
    }

    this.getRating = function(){
        return this._rating;
    }
} 
