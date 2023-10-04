import { Product } from "./product.js";
import { Review } from "./review.js";

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const IMAGES = ['frontImg', 'leftImg', 'rightImg', 'backImg'];
let REVIEW_ID = '1';

let reviews = [
    new Review('1', 'Andrey', new Date('2023-12-17T03:24:00'), 'some comment1', getRating(5, 5, 5, 5)),
    new Review('2', 'Dima', new Date('2023-12-18T04:25:00'), 'some comment2', getRating(2, 2, 2, 2)),
    new Review('3', 'Anton', new Date('2023-12-19T05:26:00'), 'some comment3', getRating(3, 3, 3, 3))
];

let products = [
    new Product('1', 'test1', 'one some description1', 450.5, 'some brand1', SIZES, 'S', 10, new Date('2023-7-19T23:10:00'), reviews, IMAGES),
    new Product('2', 'test2', 'oneSome description2', 50.8, 'some brand2', SIZES, 'M', 3, new Date('2023-8-19T08:20:55'), reviews, IMAGES),
    new Product('3', 'test3', 'some description3', 600.1, 'some brand3', SIZES, 'L', 8, new Date('2023-9-19T014:30:00'), reviews, IMAGES)
];

function getRating(serviceRating, priceRating, valueRating, qualitiRating){
    return {
        'service': serviceRating, 
        'price': priceRating, 
        'value': valueRating, 
        'quality': qualitiRating
    }
}

/**
 * Searches for objects that contain the search text
 * 
 * @param {object[]} products 
 * @param {string} searchText 
 * @returns {object[]} the objects that contain the search text
 */
function searchProducts(products, searchText){
    let lastChar = searchText.charAt(searchText.length - 1);
    if (lastChar === '*') searchText = searchText.substring(0, searchText.length - 1);
    let result = [];

    for(let product of products){
        let description = product.getDescription();

        if(lastChar !== '*'){
            // Strict search
            let words = description.split(' ');
            for(let word of words){
                if(word.includes(searchText) && word.length === searchText.length) {
                    result.push(product);
                }
            }
        } else {
            if (description.includes(searchText)) result.push(product);
        }
    }

    return result;
}

function sortProducts(products, sortRule){

}


// Tests
// Test getReviewByID()
let firstProduct = products[0];
console.log(firstProduct.getReviewByID(REVIEW_ID));

// Test getImage()
for(let image of firstProduct.getImages()){
    console.log(image);
}

// Test addSize()
console.log(firstProduct.getSizes());
firstProduct.addSize('XXXL');
console.log(firstProduct.getSizes());

// Test deleteSize()
console.log(firstProduct.getSizes());
firstProduct.deleteSize('XXXL');
console.log(firstProduct.getSizes());

// Test addReview()
console.log(firstProduct.getReviews().length);
firstProduct.addReview('4', 'Nina', new Date('2023-10-04T20-50-15'), 'some comment4', getRating(5, 5, 2, 3));
console.log(firstProduct.getReviews().length);

// Test deleteReview()
console.log(firstProduct.getReviews().length);
firstProduct.deleteReview(REVIEW_ID);
console.log(firstProduct.getReviews().length);

// Test getAveregeRating()
console.log(firstProduct.getAveregeRating());

//Test searchProducts()
console.log(searchProducts(products, 'one*'));
console.log(searchProducts(products, 'one'));
