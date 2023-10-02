function Product(id, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images){
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

    // Returns the "review" object by the given key
    this.getReviewByID = function(id){
        for(let review of this._reviews){
            if(review.id === id) {
                return review
            };
        };
    };

    // Returns the picture according to the passed parameter, if the parameter was not passed then the first picture from the array
    this.getImage = function(num){
        if(num === undefined) return this._images[0];
        return this._images[num]
    };

    // Adds a new value to the "sizes" array
    this.addSize = function(size){
        this._sizes.push(size);
    };

    // Deletes a value from the "sizes" array by the specified key
    this.deleteSize = function(size){
        for(let index = 0; index < this._sizes.lenth; index++){
            if(size === this._sizes[index]){
                this._sizes.splice(index, 1);
                break;
            };
        };
    };

    // Adds a "reviews" object to the "reviews" array
    this.addReview = function(id, author, date, comment, rating){
        this.reviews.push(new Review(id, author, date, comment, rating))
    };

    // Deletes the "reviews" object from the "reviews" array by the specified key (ID)
    this.deleteReview = function(id){
        for(let index = 0; index < this._reviews.lenth; index++){
            if (id === this._reviews[index].id){
                reviews.splice(index, 1);
            };
        };
    };

    // Returns the average rating of the product
    this.getAveregeRating = function(id){
        let review;

        for(let index = 0; index < this._reviews.lenth; index++){
            if(this._reviews[index].id === id){
                review = reviews[index];
                break;
            }
        }

        let serviceRating = review.rating.service;
        let servicePrice = review.rating.price;
        let serviceValue = review.rating.value;
        let serviceQuality = review.rating.quality;

        return (serviceRating + servicePrice + serviceValue + serviceQuality) / review.lenth

    };
}

function Review(id, author, date, comment, rating){
    this.id = id;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;

    // Getters and setters

    this.setId = function(newId){
        this.id = newId
    }

    this.getId = function(){
        return this.id
    }

    this.setAuthor = function(newAuthor){
        this.author = newAuthor
    }

    this.getAuthor = function(){
        return this.author
    }

    this.setDate = function(newDate){
        this.date = newDate
    }

    this.getDate = function(){
        return this.date
    }

    this.setComment = function(newComment){
        this.comment = newComment
    }

    this.getComment = function(){
        return this.comment
    }

    this.setRating = function(newRating){
        this.rating = newRating
    }

    this.getRating = function(){
        return this.rating
    }
} 

let reviews = [
    new Review('1', 'Andrey', new Date(2023,8,18,12,40,55), 'some comment1', {'service': 5, 'price': 5, 'value': 5, 'quality': 5}),
    new Review('2', 'Dima', new Date(2023,9,16,18,50,1), 'some comment2', {'service': 2, 'price': 2, 'value': 2, 'quality': 2}),
    new Review('3', 'Anton', new Date(2022,1,10,10,15,15), 'some comment3', {'service': 3, 'price': 3, 'value': 3, 'quality': 3})
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const IMAGES = ['1', '2', '3', '4'];

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
