import { Review } from "./review.js";

/**
 * Constructor for creating a product object
 * 
 * @param {string} id the product key (unique value)
 * @param {string} name the product name
 * @param {string} description the brief description
 * @param {number} price the product price
 * @param {string} brand the product brand
 * @param {string[]} sizes the product sizes
 * @param {string} activeSize the product active size
 * @param {number} quantity the quantity of products available
 * @param {Date} date the date of creation of the product card
 * @param {object[]} reviews the product reviews
 * @param {string[]} images the product images
 */
export function Product(id, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images){
    this._id = id;
    this._name = name;
    this._description = description;
    this._price = price;
    this._brand = brand;
    this._sizes = sizes;
    this._activeSize = activeSize;
    this._quantity = quantity;
    this._date = date;
    this._reviews = reviews;
    this._images = images;

    // Getters and setters

    this.setId = function(newId){
        this._id = newId
    };

    this.getId = function(){
        return this._id
    };

    this.setName = function(newName){
        this._name = newName
    };

    this.getName = function(){
        return this._name
    };

    this.setDescription = function(newDescription){
        this._description = newDescription
    };

    this.getDescription = function(){
        return this._description
    };

    this.setPrice = function(newPrice){
        this._price = newPrice
    };

    this.getPrice = function(){
        return this._price
    };

    this.setBrand = function(newBrand){
        this._brand = newBrand
    };

    this.getBrand = function(){
        return this._brand
    };

    this.setSizes = function(newSizes){
        this._sizes = newSizes
    };

    this.getSizes = function(){
        return this._sizes
    };

    this.setActiveSize = function(newActiveSize){
        this._activeSize = newActiveSize
    };

    this.getActiveSize = function(){
        return this._activeSize
    };

    this.setQuantity = function(newQuantity){
        this._quantity = newQuantity
    };

    this.getQuantity = function(){
        return this._quantity
    };

    this.setDate = function(newDate){
        this._date = newDate
    };

    this.getDate = function(){
        return this._date
    };

    this.setReviews = function(newReviews){
        this._reviews = newReviews
    };

    this.getReviews = function(){
        return this._reviews
    };

    this.setImages = function(newImage){
        this._images = newImage
    };

    this.getImages = function(){
        return this._images
    };

    /**
     * Returns the "review" object by the given key
     * 
     * @param {string} reviewId the key by which the search will be performed
     * @returns {object} the object of the review that meets the requirements
     */
    this.getReviewByID = function(reviewId){
        for(let review of this._reviews){
            if(review.getId() === reviewId) {
                return review
            };
        };
    };

    /**
     * Returns the picture according to the passed parameter, if the parameter was not passed then the first picture from the array
     * 
     * @param {number} numImage the number of the photo requested by the user
     * @returns {string} image as string
     */
    this.getImage = function(numImage){
        if(numImage === undefined) return this._images[0];
        return this._images[numImage]
    };

    /**
     * Adds a new value to the "sizes" array
     * 
     * @param {string} size the size to be added
     */
    this.addSize = function(size){
        this._sizes.push(size);
    };

    /**
     * Deletes a value from the "sizes" array by the specified key
     * 
     * @param {string} size the size to be deleted
     */
    this.deleteSize = function(size){
        for(let index = 0; index < this._sizes.length; index++){
            if(size === this._sizes[index]){
                this._sizes.splice(index, 1);
                break;
            };
        };
    };

    /**
     * Adds a "reviews" object to the "reviews" array
     * 
     * @param {string} id the review key
     * @param {string} author the review author
     * @param {Date} date the date of creation of the review
     * @param {string} comment the review text
     * @param {object[]} rating the product rating
     */
    this.addReview = function(id, author, date, comment, rating){
        this._reviews.push(new Review(id, author, date, comment, rating))
    };

    /**
     * Deletes the "reviews" object from the "reviews" array by the specified key (ID)
     * 
     * @param {string} reviewId the review key
     */
    this.deleteReview = function(reviewId){
        for(let index = 0; index < this._reviews.length; index++){
            if (reviewId === this._reviews[index].getId()){
                this._reviews.splice(index, 1);
            };
        };
    };

    /**
     * Returns the average rating of the product
     * 
     * @returns the average rating of the product
     */
    this.getAveregeRating = function(){
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
    };
}