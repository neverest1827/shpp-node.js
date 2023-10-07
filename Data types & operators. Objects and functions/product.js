import { Review } from "./Review.js";

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
}

Object.assign(Product.prototype, {
    // Getters and setters
    setId(newId){
        this._id = newId;
    },

    getId(){
        return this._id;
    },

    setName(newName){
        this._name = newName;
    },

    getName(){
        return this._name;
    },

    setDescription(newDescription){
        this._description = newDescription;
    },

    getDescription(){
        return this._description;
    },

    setPrice(newPrice){
        this._price = newPrice;
    },

    getPrice(){
        return this._price;
    },

    setBrand(newBrand){
        this._brand = newBrand;
    },

    getBrand(){
        return this._brand;
    },

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

    setQuantity(newQuantity){
        this._quantity = newQuantity;
    },

    getQuantity(){
        return this._quantity;
    },

    setDate(newDate){
        this._date = newDate;
    },

    getDate(){
        return this._date;
    },

    setReviews(newReviews){
        this._reviews = newReviews;
    },

    getReviews(){
        return this._reviews;
    },

    setImages(newImage){
        this._images = newImage;
    },

    getImages(){
        return this._images;
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
})
