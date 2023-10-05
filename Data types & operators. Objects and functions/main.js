import { Product } from "./product.js";
import { Review } from "./review.js";

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const IMAGES = ['frontImg', 'leftImg', 'rightImg', 'backImg'];
const REVIEW_ID = '1';
const SORT_RULES = ['Price', 'Name', 'ID'];
const TAB = '\t';

let reviews = [
    new Review('1', 'Andrey', new Date('2023-12-17T03:24:00'), 'some comment1', setRating(5, 5, 5, 5)),
    new Review('2', 'Dima', new Date('2023-12-18T04:25:00'), 'some comment2', setRating(2, 2, 2, 2)),
    new Review('3', 'Anton', new Date('2023-12-19T05:26:00'), 'some comment3', setRating(3, 3, 3, 3))
];

let products = [
    new Product('2', 'test3', 'one some description1', 450.5, 'some brand1', SIZES, 'S', 10, new Date('2023-7-19T23:10:00'), reviews, IMAGES),
    new Product('1', 'test2', 'oneSome description2', 50.8, 'some brand2', SIZES, 'M', 3, new Date('2023-8-19T08:20:55'), reviews, IMAGES),
    new Product('3', 'test1', 'some description3', 600.1, 'some brand3', SIZES, 'L', 8, new Date('2023-9-19T014:30:00'), reviews, IMAGES)
];

function setRating(serviceRating, priceRating, valueRating, qualitiRating){
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
 * @param {object[]} products array of "Product" objects
 * @param {string} searchText the text you want to search for
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

/**
 * Sorts product objects by the specified attribute
 * 
 * @param {object[]} products array of "Product" objects
 * @param {string} sortRule the attribute on which the erasure is performed
 * @returns {object[]} array of sorted objects
 */
function sortProducts(products, sortRule){
    let sortedProducts = [...products];
    
    switch (sortRule){
        case 'Price':
            sortedProducts.sort( (a, b) => {
                return a.getPrice() - b.getPrice();
            });
            break;
        case 'Name':
            sortedProducts.sort( (a, b) => {
                return a.getName().localeCompare( b.getName() );
            });
            break;
        case 'ID':
            sortedProducts.sort( (a, b) => {
                return a.getId().localeCompare( b.getId() );
            });
            break;
    }

    return sortedProducts;
}


// Tests
// Test getReviewByID()
console.log('Test getReviewByID():');
let firstProduct = products[0];
console.log(firstProduct.getReviewByID(REVIEW_ID));

// Test getImage()
console.log('Test getImage():');
for(let image of firstProduct.getImages()){
    console.log(image);
}

// Test addSize()
console.log('Test addSize():');
console.log('First product sizes before - ' + firstProduct.getSizes());
firstProduct.addSize('XXXL');
console.log('First product sizes before - ' + firstProduct.getSizes());

// Test deleteSize()
console.log('Test deleteSize():');
console.log('First product sizes before - ' + firstProduct.getSizes());
firstProduct.deleteSize('XXXL');
console.log('First product sizes after  - ' + firstProduct.getSizes());

// Test addReview()
console.log('Test addReview():');
console.log('count reviews before - ' + firstProduct.getReviews().length);
firstProduct.addReview('4', 'Nina', new Date('2023-10-04T20-50-15'), 'some comment4', setRating(5, 5, 2, 3));
console.log('count reviews after  - ' + firstProduct.getReviews().length);

// Test deleteReview()
console.log('deleteReview():');
console.log('count reviews - ' + firstProduct.getReviews().length);
firstProduct.deleteReview(REVIEW_ID);
console.log('count reviews - ' + firstProduct.getReviews().length);

// Test getAveregeRating()
console.log('Test getAveregeRating():');
console.log('first product avg rating - ' + firstProduct.getAveregeRating());

// Test searchProducts()
console.log('Test searchProducts() with "*"');
console.log(searchProducts(products, 'one*'));
console.log('Test searchProducts() without "*"');
console.log(searchProducts(products, 'one'));

// Test sortProducts()
console.log('Test sortProducts():');
for(let sortRule of SORT_RULES){
    console.log(sortRule + ': ');
    console.log(sortProducts(products, sortRule));
}
