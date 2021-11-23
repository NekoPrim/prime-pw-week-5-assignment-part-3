console.log('***** Music Collection *****')

const collection = [];

console.log(collection);

function addToCollection(title, artist, yearPublished) {
    console.log('in addToCollection');
    let album = [title, artist, yearPublished]
    collection.push(album);
    return `added ${album}`;
}

console.log(addToCollection('Cups', 'Anna Kendrick', 2013));

console.log(collection);

console.log(addToCollection('4k', 'El Alfa', 2020));

console.log(addToCollection('Makeba', 'Jain', 2017));

console.log(collection);

console.log(addToCollection('Bang', 'AJR', 2020));

console.log(addToCollection('Burn the House Down', 'AJR', 2018));

console.log(addToCollection('Sugar', 'Robin Schulz', 2015));

console.log(collection);