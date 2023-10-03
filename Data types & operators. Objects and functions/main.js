import { Product } from "./product";
import { Review } from "./review";

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const IMAGES = ['frontImg', 'leftImg', 'rightImg', 'backImg'];

let reviews = [
    new Review('1', 'Andrey', new Date(2023,8,18,12,40,55), 'some comment1', {'service': 5, 'price': 5, 'value': 5, 'quality': 5}),
    new Review('2', 'Dima', new Date(2023,9,16,18,50,1), 'some comment2', {'service': 2, 'price': 2, 'value': 2, 'quality': 2}),
    new Review('3', 'Anton', new Date(2022,1,10,10,15,15), 'some comment3', {'service': 3, 'price': 3, 'value': 3, 'quality': 3})
];

let products = [
    new Product('1', 'test1', 'some description1', 450.5, 'some brand1', SIZES, 'S', 10, new Date(2023,10,2,18,0,0), reviews, IMAGES),
    new Product('2', 'test2', 'some description2', 50.8, 'some brand2', SIZES, 'M', 3, new Date(2023,8,2,17,0,0), reviews, IMAGES),
    new Product('3', 'test3', 'some description3', 600.1, 'some brand3', SIZES, 'L', 8, new Date(2022,6,2,15,0,0), reviews, IMAGES)
];

function searchProducts(products, searchText){
    
}

function sortProducts(products, sortRule){

}


//Tests
let product1 = new Product('1', 'test1', 'some description1', 450.5, 'some brand1', SIZES, 'S', 10, new Date(2023,10,2,18,0,0), reviews, IMAGES);
console.log('Id before: ' + product1.getId());
product1.setId(11);
console.log('Id aftet:  ' + product1.getId());

console.log('Name before: ' + product1.getName());
product1.setName('test11');
console.log('Name aftet:  ' + product1.getName());

console.log('Description before: ' + product1.getDescription());
product1.setDescription('some description11');
console.log('Description aftet:  ' + product1.getDescription());

console.log('Price before: ' + product1.getPrice());
product1.setPrice(10.8);
console.log('Price aftet:  ' + product1.getPrice());

console.log('Brand before: ' + product1.getBrand());
product1.setBrand("some brand11");
console.log('Brand aftet:  ' + product1.getBrand());

console.log('Sizes before: ' + product1.getSizes());
product1.setSizes(['XS', 'S', 'M']);
console.log('Sizes aftet:  ' + product1.getSizes());

console.log('Active size before: ' + product1.getActiveSize());
product1.setActiveSize('L');
console.log('Active size aftet:  ' + product1.getActiveSize());

console.log('Quantity before: ' + product1.getQuantity());
product1.setQuantity(1);
console.log('Quantity aftet:  ' + product1.getQuantity());

console.log('Date before: ' + product1.getDate());
product1.setDate(new Date(2010,3,11,23,14,55));
console.log('Date aftet:  ' + product1.getDate());

console.log('Reviews before: ' + product1.getReviews());
product1.setReviews(new Review('11', 'Irina', new Date(2020,3,1,18,50,10), 'some comment11', {'service': 3, 'price': 5, 'value': 1, 'quality': 3}),);
console.log('Reviews aftet:  ' + product1.getReviews());

console.log('Images before: ' + product1.getImages());
product1.setImages(['11']);
console.log('Images aftet:  ' + product1.getImages());
