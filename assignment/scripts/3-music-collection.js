console.log('***** Music Collection *****');

//create a variable collections

const collection = [];

console.log('collection', collection);

//add a function named addToCollection
//**I made all my functions const again cuz of being issues with when i first load the page*/
//**Empy arrays do not show empty. Talked in class and was told it was a chrome error*/

function addToCollection(itemX, itemY, itemZ) {
    console.log('in addToCollection');
    let x = {
        title: itemX,
        artist: itemY,
        yearPublished: itemZ
    }
    collection.push(x);
    return `added: ${itemX}, ${itemY}, ${itemZ}`;
};

//add 6 albums

console.log(addToCollection('Cups', 'Anna Kendrick', 2013));

console.log('collection:', collection);

console.log(addToCollection('4k', 'El Alfa', 2020));

console.log(addToCollection('Makeba', 'Jain', 2017));

console.log('collection:', collection);

console.log(addToCollection('Bang', 'AJR', 2020));

console.log(addToCollection('Burn the House Down', 'AJR', 2018));

console.log(addToCollection('Sugar', 'Robin Schulz', 2015));

console.log('collection:', collection);

//add a function named showCollection

function showCollection() {
    console.log('in showCollection');
    console.log(collection.length);
    for (let x = 0; x < collection.length; x ++) {
        console.log(collection[x]);
    }
    return true;
};

//test showCollection

showCollection();

//add a function named findByArtist

collection.artist.indexOf('Robin Schulz');

function findByArtist(array, item) {
    console.log('in findByArtist');
    console.log(`looking for ${item}`);
    let album = [];
    let y = collection.artist.indexOf(item);
    for (let x in array.artist) {
        if (x === item) {
            album.push(array[x]);
        }
    }
    return album;
};

//test findByArtist

console.log(findByArtist(collection, 'Robin Schulz'));

console.log(findByArtist(collection, 'AJR'));

console.log(findByArtist(collection, 'Britany Spears'));

//**Stretch Goals*/
//add a function called search

const search = (array, item) => {
    console.log('in search');
    if (!item) return null;
    let album = [];
    for (let x = 0; x < array.length; x ++) {
        console.log('in loop');
        if (array[x][0] === item) {
            album.push(array[x]);
            console.log('Title:', array[x][0], ', Artist:', array[x][1], ', Year:', array[x][2]);
        }
    }
    return album;
};

search(collection, 'Burn the House Down');

search(collection, 'AJR');

search(collection, 'Banana Phone');

search(collection, );

//update tracks

