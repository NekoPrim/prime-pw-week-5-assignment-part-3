console.log('***** Music Collection *****')

//create a variable collections

const collection = [];

console.log(collection);

//add a function named addToCollection

const addToCollection = (array, title, artist, yearPublished) => {
    console.log('in addToCollection');
    let x = [title, artist, yearPublished];
    array.push(x);
    return `added ${x}`;
}

//add 6 albums

console.log(addToCollection(collection, 'Cups', 'Anna Kendrick', 2013));

console.log(collection);

console.log(addToCollection(collection, '4k', 'El Alfa', 2020));

console.log(addToCollection(collection, 'Makeba', 'Jain', 2017));

console.log(collection);

console.log(addToCollection(collection, 'Bang', 'AJR', 2020));

console.log(addToCollection(collection, 'Burn the House Down', 'AJR', 2018));

console.log(addToCollection(collection, 'Sugar', 'Robin Schulz', 2015));

console.log(collection);

//add a function named showCollection

const showCollection = (array) => {
    console.log('in showCollection');
    for (x of array) {
        console.log(x);
    }
}

//test showCollection

showCollection(collection);
