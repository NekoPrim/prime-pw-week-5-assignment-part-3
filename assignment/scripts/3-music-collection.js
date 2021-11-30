console.log('***** Music Collection *****');

//create a variable collections

const collection = [];

console.log('collection', collection);

//add a function named addToCollection
//**I made all my functions const again cuz of being issues with when i first load the page*/
//**Empy arrays do not show empty. Talked in class and was told it was a chrome error*/

function addToCollection(x, y, z) {
    console.log('in addToCollection');
    let album = {
        title: x,
        artist: y,
        yearPublished: z
    }
    collection.push(album);
    return album;
}

//add 6 albums

console.log(addToCollection('Folk Songs of the Hills', 'Merle Travis', 1947));

console.log('collection:', collection);

console.log(addToCollection('El Androide', 'El Alfa', 2020));

console.log(addToCollection('Zanaka', 'Jain', 2015));

console.log('collection:', collection);

console.log(addToCollection('OK Orchestra', 'AJR', 2020));

console.log(addToCollection('The Click', 'AJR', 2018));

console.log(addToCollection('Life in a Cartoon', 'Mika', 2007));

console.log('collection:', collection);

//add a function named showCollection

function showCollection(array) {
    console.log('in showCollection');
    console.log('number of items in array:', array.length);
    for (let album of array) {
        console.log(album.title, 'by', album.artist, 'published in year', album.yearPublished);
    }
    return true;
}

//test showCollection

showCollection(collection);

//add a function named findByArtist

function findByArtist(item) {
    console.log('in findByArtist');
    console.log(`looking for ${item}`);
    let album = [];
    let y = collection.artist.indexOf(item);
    for (let x in collection.artist) {
        if (x === item) {
            album.push(array[x]);
        }
    }
    return album;
}

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

