import { Product } from "./product.js";
import { Review } from "./review.js";

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const IMAGES = ['frontImg', 'leftImg', 'rightImg', 'backImg'];

let reviews = [
    new Review('1', 'Andrey', new Date('2023-12-17T03:24:00'), 'some comment1', {'service': 5, 'price': 5, 'value': 5, 'quality': 5}),
    new Review('2', 'Dima', new Date('2023-12-18T04:25:00'), 'some comment2', {'service': 2, 'price': 2, 'value': 2, 'quality': 2}),
    new Review('3', 'Anton', new Date('2023-12-19T05:26:00'), 'some comment3', {'service': 3, 'price': 3, 'value': 3, 'quality': 3})
];

let products = [
    new Product('1', 'test1', 'some description1', 450.5, 'some brand1', SIZES, 'S', 10, new Date('2023-7-19T23:10:00'), reviews, IMAGES),
    new Product('2', 'test2', 'some description2', 50.8, 'some brand2', SIZES, 'M', 3, new Date('2023-8-19T08:20:55'), reviews, IMAGES),
    new Product('3', 'test3', 'some description3', 600.1, 'some brand3', SIZES, 'L', 8, new Date('2023-9-19T014:30:00'), reviews, IMAGES)
];

function searchProducts(products, searchText){
    
}

function sortProducts(products, sortRule){

}


//Tests

