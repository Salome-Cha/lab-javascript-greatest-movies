// FUNCTIONS OVER ARRAYS LAB.

// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (movies) => {
    return movies.map((movie) => {
        return movie.director;
    });
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (movies) => {

      /*if (movies.length === 0) {
        return 0;
    }*/

    let spielbergDramaMovies = movies.filter(movie => {
        return (movie.genre.includes ('Drama') && movie.director === 'Steven Spielberg');
    });
    return spielbergDramaMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverageAlt = (movies) => {

    if (movies.length === 0) {
        return 0;
    }

    let totalSum = 0;
    movies.forEach(movie => {
        if (!movie.rate) {
            movie.rate = 0;
        }
        totalSum += movie.rate;
    });
    let average = totalSum / movies.length;
    return  Number(average.toFixed(2));  // to.Fixed converts to string and
                                        //  Number () puts it back as number 
}



//OR ANOTHER way of doing this is to use reduce.

let ratesAverage = (movies) => {
    if (movies.length === 0) {
        return 0;
    }
    let reduceSum = movies.reduce((accumulator, currentvalue)  => {
        if (!currentvalue.rate) {
            currentvalue.rate = 0;
        }
        return accumulator + currentvalue.rate;
    }, 0);
    let avg = reduceSum / movies.length;
        return Number(avg.toFixed(2));
};


// Iteration 4: Drama movies - Get the average of Drama Movies

// Get only drama movies
// calculate the average of those movies: hint:
// we already have a function that does the
// average calculation.

let dramaMoviesRate = (movies) => {
    /*if (movies.length === 0) {
        return 0;
    }*/
    let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaMovies);   // Calling existing
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    let orderedMovies = movies.sort((movie1, movie2) => {
if (movie1.year === movie2.year) {
        if (movie1.title > movie2.title) {
            return 1;
        } else {
            return -1;
        }
            } else {
                if (movie1.year > movie2.year) {
                    return 1;
                } else {
                    return -1;
                }
                }
            });
            // We can use the spread operator, instead of return orderedMovies.
    return [...orderedMovies] // Spread operator > spreads the items of the array in another array.
}

// return orderedMovies does not compile the Should "return a new array"
    // because for JS back log it is still the same array, I only sorted it
    // EITHER MAP OR SPREAD TO GET A REALLY NEW ARRAY FORM THE BACK OF JS
    //Spread Operator  [...xxx]



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// NB // The spread operator is used to create a new array with element, instead of working directly on the initial array. 

let orderAlphabetically = (movies) => {
    let sortedArray = [...movies].sort((movie1, movie2) => {   
        if (movie1.title > movie2.title) {
                return 1;
            } else {
                return -1;
            }
    }).slice(0, 20);
    return sortedArray.map(movie => movie.title);
}

// wE USE SLICE  To slice the array, and have a new array with the first elements.


 // a, b because is inside the OBJECT.
    //[...] for new array you need .spread
    //.short does not create a new array
    //.map return only tiltes

    
// let myArray = []
// let my newArray = myArray
// Internally is the same Array, for JS backlog you are referrencing the same array 
// to create an actual NEw Array on the backlog of JS use 
// .MAP   or   [...xxx]   Spread


// SORTING ARRAYS: summary.
// If we are ordering strings > we can do sort.
// If we are ordering numbers > we use sort with a function inside >>> .sort (<function inside>).
// If we are ordering objects > we need sort with a function inside >>> .sort (<function inside>).

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// Check what Miguel shall send.


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// Check what Miguel shall send.
