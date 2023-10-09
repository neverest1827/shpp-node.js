"use strict"

import { Clothes } from "./Clothes.js";
import { Electronics } from "./Electronics.js";
import { Review } from "../Data types & operators. Objects and functions/Review.js";
import { searchProducts, sortProducts, setRating } from "../Data types & operators. Objects and functions/functions.js";

const IMAGES = ['frontImg', 'leftImg', 'rightImg', 'backImg'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const SORT_RULES = ['Price', 'Name', 'ID'];
const REVIEW_ID = '1';
const NEXT_ROW = '\n'

const TEST_REVIEWS = [
    new Review(
        '1',
        'Andrey',
        new Date('2023-10-06T21:27:53'),
        'Very good product everything is nice',
        setRating(5, 5, 5, 5)
    ),
    new Review(
        '3',
        'Andrey',
        new Date('2023-10-07T21:27:53'),
        'Normal product but there are some drawbacks',
        setRating(3, 4, 3, 4)
    ),
    new Review(
        '2',
        'Andrey',
        new Date('2023-10-08T21:27:53'),
        'Bad product, everything is of terrible quality',
        setRating(2, 2, 2, 2)
    ),

]

const CLOTHES_TEST_ARRAY = [
    new Clothes(
        '1', 
        'Jacket for sports',
        'These are great jackets that are a pleasure to run in every morning. They are very comfortable.',
        299.99,
        5,
        TEST_REVIEWS,
        IMAGES,
        new Date('2022-01-01T20:33:03'),
        'Puma',
        'Cotton',
        'White',
        SIZES,
        'L'
    ),
    new Clothes(
        '3', 
        'Sports pants',
        'Pants made of high quality fabric and mammoth fur. XD',
        1000.01,
        54,
        TEST_REVIEWS,
        IMAGES,
        new Date('2022-02-01T20:33:03'),
        'Versace',
        'Denim',
        'White',
        SIZES,
        'XXL'
    ),
    new Clothes(
        '2', 
        'T-shirt',
        'T-shirt with Nike logo. andand.',
        105.50,
        3,
        TEST_REVIEWS,
        IMAGES,
        new Date('2022-03-01T20:33:03'),
        'Nike',
        'Cotton',
        'White',
        SIZES,
        'S'
    )
]

const ELECTRONICS_TEST_ARRAY = [
    new Electronics(
        '4',
        'iPad',
        'some iPad',
        600,
        10,
        TEST_REVIEWS,
        IMAGES,
        new Date('2022-01-01T20:33:03'),
        'Apple',
        2,
        '120W'
    ),

    new Electronics(
        '5',
        'iPhone 14 Pro Max Super Plus Ultra',
        'some iPhone',
        1500,
        5,
        TEST_REVIEWS,
        IMAGES,
        new Date('2022-01-01T20:33:03'),
        'Apple',
        3,
        '120W'
    ),

    new Electronics(
        '6',
        'Xiaomi Note 13 M',
        'some Xiaomi',
        400,
        22,
        TEST_REVIEWS,
        IMAGES,
        new Date('2022-01-01T20:33:03'),
        'Xiaomi',
        1,
        '120W'
    ),
]

// Test clothes methods
const testClothingProduct = CLOTHES_TEST_ARRAY[0];

console.log('Test getReviewByID():');
console.log(testClothingProduct.getReviewByID(REVIEW_ID));

console.log(`${NEXT_ROW}Test getImage():`);
console.log(testClothingProduct.getImage()); 
for(let numImage = 0; numImage < testClothingProduct.getImages().length; numImage++){
    console.log(testClothingProduct.getImage(numImage));
}

console.log(`${NEXT_ROW}Test addSize():`);
console.log(`First product sizes before - ${testClothingProduct.getSizes()}`);
testClothingProduct.addSize('XXXL');
console.log(`First product sizes after - ${testClothingProduct.getSizes()}`);

console.log(`${NEXT_ROW}Test deleteSize():`);
console.log(`First product sizes before - ${testClothingProduct.getSizes()}`);
testClothingProduct.deleteSize('XXXL');
console.log(`First product sizes after - ${testClothingProduct.getSizes()}`);

console.log(`${NEXT_ROW}Test addReview():`);
console.log(`count reviews before - ${testClothingProduct.getReviews().length}`);
testClothingProduct.addReview('4', 'Nina', new Date('2023-10-04T20-50-15'), 'some comment4', setRating(5, 5, 2, 3));
console.log(`count reviews after  - ${testClothingProduct.getReviews().length}`);

console.log(`${NEXT_ROW}Test deleteReview():`);
console.log(`count reviews before - ${testClothingProduct.getReviews().length}`);
let lastClothingReviewIndex = testClothingProduct.getReviews().length - 1;
let lastClothingReviewId = testClothingProduct.getReviews()[lastClothingReviewIndex].getId();
testClothingProduct.deleteReview(lastClothingReviewId);
console.log(`count reviews after  - ${testClothingProduct.getReviews().length}`);

console.log(`${NEXT_ROW}Test getAveregeRating():`);
console.log(`${testClothingProduct.getName()} have - ${testClothingProduct.getAveregeRating()} avg rating`);

console.log(`${NEXT_ROW}Test searchProducts() with "*"`);
console.log(searchProducts(CLOTHES_TEST_ARRAY, 'and*'));
console.log(`${NEXT_ROW}Test searchProducts() without "*"`);
console.log(searchProducts(CLOTHES_TEST_ARRAY, 'and'));

console.log(`${NEXT_ROW}Test sortProducts():`);
for(let sortRule of SORT_RULES){
    console.log(`${NEXT_ROW}Sorted by ${sortRule}:`);
    console.log(sortProducts(CLOTHES_TEST_ARRAY, sortRule));
}

console.log(`${NEXT_ROW}Test getFullInformation():`);
console.log(testClothingProduct.getFullInformation());

console.log(`${NEXT_ROW}Test getFullInformation():`);
let countClothingProduct = testClothingProduct.getQuantity();
console.log(`${countClothingProduct} units of the product cost - ${testClothingProduct.getPriceForQuantity(countClothingProduct)}`);

console.log(`${NEXT_ROW}Test handleField():`);
console.log(`Current name - ${testClothingProduct.handleField('name')}`);
testClothingProduct.handleField('name', 'newName');
console.log(`Changed name - ${testClothingProduct.handleField('name')}`);

console.log('_____________________________');
// Test electronic methods
const testElectronicProduct = ELECTRONICS_TEST_ARRAY[0];

console.log(`${NEXT_ROW}Test getReviewByID():`);
console.log(testElectronicProduct.getReviewByID(REVIEW_ID));

console.log(`${NEXT_ROW}Test getImage():`);
console.log(testElectronicProduct.getImage()); 
for(let numImage = 0; numImage < testElectronicProduct.getImages().length; numImage++){
    console.log(testElectronicProduct.getImage(numImage));
}

console.log(`${NEXT_ROW}Test addReview():`);
console.log(`count reviews before - ${testElectronicProduct.getReviews().length}`);
testElectronicProduct.addReview('4', 'Nina', new Date('2023-10-04T20-50-15'), 'some comment4', setRating(5, 5, 2, 3));
console.log(`count reviews after  - ${testElectronicProduct.getReviews().length}`);

console.log(`${NEXT_ROW}Test deleteReview():`);
console.log(`count reviews before - ${testElectronicProduct.getReviews().length}`);
let lastElectronicReviewIndex = testClothingProduct.getReviews().length - 1;
let lastElectronicReviewId = testClothingProduct.getReviews()[lastElectronicReviewIndex].getId();
testClothingProduct.deleteReview(lastElectronicReviewId);
console.log(`count reviews after  - ${testElectronicProduct.getReviews().length}`);

console.log(`${NEXT_ROW}Test getAveregeRating():`);
console.log(`${testElectronicProduct.getName()} have - ${testElectronicProduct.getAveregeRating()} avg rating`);

console.log(`${NEXT_ROW}Test searchProducts() with "*"`);
console.log(searchProducts(ELECTRONICS_TEST_ARRAY, 'M*'));
console.log(`${NEXT_ROW}Test searchProducts() without "*"`);
console.log(searchProducts(ELECTRONICS_TEST_ARRAY, 'M'));

console.log(`${NEXT_ROW}Test sortProducts():`);
for(let sortRule of SORT_RULES){
    console.log(`${NEXT_ROW}Sorted by ${sortRule}:`);
    console.log(sortProducts(ELECTRONICS_TEST_ARRAY, sortRule));
}

console.log(`${NEXT_ROW}Test getFullInformation():`);
console.log(testElectronicProduct.getFullInformation());

console.log(`${NEXT_ROW}Test getFullInformation():`);
let countElectronicProduct = testElectronicProduct.getQuantity();
console.log(`${countElectronicProduct} units of the product cost - ${testElectronicProduct.getPriceForQuantity(countElectronicProduct)}`);

console.log(`${NEXT_ROW}Test handleField():`);
console.log(`Current name - ${testElectronicProduct.handleField('name')}`);
testElectronicProduct.handleField('name', 'newName');
console.log(`Changed name - ${testElectronicProduct.handleField('name')}`);
