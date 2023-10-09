"use strict"

/**
 * Searches for objects that contain the search text
 * 
 * @param {object[]} products array of "Product" objects
 * @param {string} searchText the text you want to search for
 * @returns {object[]} the objects that contain the search text
 */
export function searchProducts(products, searchText){
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
export function sortProducts(products, sortRule){
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

/**
 * Creates an array of ratings by criteria
 * 
 * @param {number} serviceRating quality assessment for service
 * @param {number} priceRating quality assessment for price
 * @param {number} valueRating quality assessment for value
 * @param {number} qualitiRating quality assessment for qualiti
 * @returns an array with scores based on criteria
 */
export function setRating(serviceRating, priceRating, valueRating, qualitiRating){
    return {
        'service': serviceRating, 
        'price': priceRating, 
        'value': valueRating, 
        'quality': qualitiRating
    }
}