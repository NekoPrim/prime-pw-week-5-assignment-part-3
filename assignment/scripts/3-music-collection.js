console.log('***** Music Collection *****');

//create a variable collections

const collection = [];

console.log('collection', collection);

//add a function named addToCollection
//**I made all my functions const again cuz of being issues with when i first load the page*/
//**Empy arrays do not show empty. Talked in class and was told it was a chrome error*/

const addToCollection = (object, title, artist, yearPublished) => {
    console.log('in addToCollection');
    let x = [title, artist, yearPublished];
    object.push(x);
    return `added: ${x}`;
};

//add 6 albums

console.log(addToCollection(collection, 'Cups', 'Anna Kendrick', 2013));

console.log('collection:', collection);

console.log(addToCollection(collection, '4k', 'El Alfa', 2020));

console.log(addToCollection(collection, 'Makeba', 'Jain', 2017));

console.log('collection:', collection);

console.log(addToCollection(collection, 'Bang', 'AJR', 2020));

console.log(addToCollection(collection, 'Burn the House Down', 'AJR', 2018));

console.log(addToCollection(collection, 'Sugar', 'Robin Schulz', 2015));

console.log('collection:', collection);

//add a function named showCollection

const showCollection = (array) => {
    console.log('in showCollection');
    console.log(array);
    for (let x = 0; x < array.length; x ++) {
        console.log('Title:', array[x][0], '/ By artist:', array[x][1], '/ Published in year:', array[x][2]);
    }
    return true;
};

//test showCollection

showCollection(collection);

//add a function named findByArtist

const findByArtist = (array, artist) => {
    console.log('in findByArtist');
    console.log(`looking for ${artist}`);
    let album = [];
    for (let x = 0; x < array.length; x ++) {
        if (array[x][1] === artist) {
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

const search = (array, song) => {
    console.log('in search');
    let album = [];
    for (let x = 0; x < array.length; x ++) {
        console.log('in loop');
        if (array[x][0] === song) {
            album.push(array[x][1], array[x][2]);
        }
        if (song === null) {
            return array;
        }
    }
    return album;
};

console.log(search(collection, 'Burn the House Down'));

console.log(search(collection, 'Banana Phone'));

console.log(search(collection, ));