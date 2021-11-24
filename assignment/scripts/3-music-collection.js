console.log('***** Music Collection *****')

//create a variable collections

const
 collection = [];

console.log('collection', collection);

//add a function named addToCollection

const addToCollection = (object, title, artist, yearPublished) => {
    console.log('in addToCollection');
    let x = [title, artist, yearPublished];
    object.push(x);
    return `added: ${x}`;
}

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

const showCollection = (object) => {
    console.log('in showCollection');
    for (let x = 0; x < object.length; x ++) {
        console.log(object[x]);
    }
    return 'Title:', object[x][0], '/ By artist:', object[x][1], '/ Published in year:', object[x][2];

}

//test showCollection

showCollection(collection);

//add a function named findByArtist

const findByArtist = (object, artist) => {
    console.log('in findByArtist');
    let x = 0;
    for (let x in object) {
        console.log('in loop');
        if (object[x][1] === artist) {
            console.log(`looking for ${artist}`);
        }
    }
    return object[x];
}

//test findByArtist

console.log(findByArtist(collection, 'Robin Schulz'));

console.log(findByArtist(collection, 'AJR'));

console.log(findByArtist(collection, 'Britany Spears'));