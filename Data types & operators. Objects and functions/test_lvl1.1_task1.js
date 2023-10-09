"use strict"

import { Product } from "./Product.js";
import { Review } from "./Review.js";
import { searchProducts, sortProducts, setRating } from "./functions.js";

const IMAGES = ['frontImg', 'leftImg', 'rightImg', 'backImg'];
const REVIEW_ID = '1';
const SORT_RULES = ['Price', 'Name', 'ID'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const NEXT_ROW = '\n';

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

// Tests
console.log('Test getReviewByID():');
let firstProduct = products[0];
console.log(firstProduct.getReviewByID(REVIEW_ID));

console.log(`${NEXT_ROW}Test getImage():`);
console.log(firstProduct.getImage());
for(let numImage = 0; numImage < firstProduct.getImages().length; numImage++){
    console.log(firstProduct.getImage(numImage));
}

console.log(`${NEXT_ROW}Test addSize():`);
console.log('First product sizes before - ' + firstProduct.getSizes());
firstProduct.addSize('XXXL');
console.log('First product sizes after - ' + firstProduct.getSizes());

console.log(`${NEXT_ROW}Test deleteSize():`);
console.log('First product sizes before - ' + firstProduct.getSizes());
firstProduct.deleteSize('XXXL');
console.log('First product sizes after  - ' + firstProduct.getSizes());

console.log(`${NEXT_ROW}Test addReview():`);
console.log('count reviews before - ' + firstProduct.getReviews().length);
firstProduct.addReview('4', 'Nina', new Date('2023-10-04T20-50-15'), 'some comment4', setRating(5, 5, 2, 3));
console.log('count reviews after  - ' + firstProduct.getReviews().length);

console.log(`${NEXT_ROW}Test deleteReview():`);
console.log('count reviews before - ' + firstProduct.getReviews().length);
firstProduct.deleteReview(REVIEW_ID);
console.log('count reviews after  - ' + firstProduct.getReviews().length);

console.log(`${NEXT_ROW}Test getAveregeRating():`);
console.log('first product avg rating - ' + firstProduct.getAveregeRating());

console.log(`${NEXT_ROW}Test searchProducts() with "*"`);
console.log(searchProducts(products, 'one*'));
console.log(`${NEXT_ROW}Test searchProducts() without "*"`);
console.log(searchProducts(products, 'one'));

console.log(`${NEXT_ROW}Test sortProducts():`);
for(let sortRule of SORT_RULES){
    console.log(`${NEXT_ROW}Sorted by ${sortRule}:`);
    console.log(sortProducts(products, sortRule));
}
