/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/
let test = "hello";

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
let sum = 10 + 20;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/
let random = Math.floor(Math.random() * 21);

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
let me = {
  name: "Viren",
  surname: "Patil",
  age: 23,
};
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;

/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
me.skills = ["Javascript", "React", "Mongodb", "Nodejs", "Expressjs"];

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/
me.skills.pop();

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
function dice() {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
function whoIsBigger(num1, num2) {
  return num1 > num2 ? `${num1} is bigger` : `${num2} is bigger`;
}

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/
function splitMe(str) {
  return str.split(" ");
}

/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/
function deleteOne(str, bool) {
  return bool == true
    ? str.substring(1, str.length)
    : str.substring(0, str.length - 1);
}

/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
function onlyLetters(str) {
  return str.replace(/\s([0-9])\w+/g, "");
}
console.log(onlyLetters("I love 123 whatever"));
/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
function isThisAnEmail(email) {
  return /\S+@\S+\.\S+/.test(email) === true ? true : false;
}

/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/
function whatDayIsIt() {
  days = [
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[new Date().getDay() - 1];
}

/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
function rollTheDices(num) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(dice());
    sum += arr[i];
  }

  return [sum, arr];
}
console.log(rollTheDices(6));

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/
function howManyDays(str) {
  let num1 = new Date(str).getDate();
  let today = new Date().getDate();
  return `Days passed are ${today - num1}`;
  // return new Date().toLocaleString().split(',')
}
/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/
function isTodayMyBDay(str) {
  let num1 = new Date(str).toLocaleDateString();
  let today = new Date().toLocaleDateString();
  return num1 === today;
}
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/
function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/
function olderMovie(arr) {
  let years = [];
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    let test = arr[i].Year;
    years.push(parseInt(test));
  }
  sorted = years.sort();
  let olderYear = sorted[0].toString();

  return arr.filter((movie) => movie.Year === olderYear);
}

/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/
function countMovies(arr) {
  return arr.length;
}

/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/
function onlyTitles(arr) {
  let names = [];
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].Title);
  }
  return names;
}
/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/
function onlyThisMillennium(arr) {
  let moviesOfThisMill = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Year >= "2000") {
      moviesOfThisMill.push(arr[i]);
    }
  }
  return moviesOfThisMill;
}
/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/
function getMovieById(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].imdbID == str) {
      return arr[i];
    }
  }
}

/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/
function sumYears(arr) {
  let years = [];
  let totalOfYears = 0;
  for (let i = 0; i < arr.length; i++) {
    years.push(parseInt(arr[i].Year));
  }
  years.forEach((year) => {
    totalOfYears += year;
  });

  return totalOfYears;
}
/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/
function searchMovie(arr, str) {
  let moviesWithString = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Title.toUpperCase().includes(str.toUpperCase())) {
      moviesWithString.push(arr[i]);
    }
  }
  return moviesWithString;
}

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/
function searchAndDivide(arr, str) {
  let moviesWithString = [];
  let moviesWithoutString = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Title.toUpperCase().includes(str.toUpperCase())) {
      moviesWithString.push(arr[i]);
    } else {
      moviesWithoutString.push(arr[i]);
    }
  }
  return { moviesWithString, moviesWithoutString };
}

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/
function deleteX(arr, num) {
  // let result = []
  let arr1 = arr.slice(0, num);
  let arr2 = arr.slice(num + 1, arr.length);
  return arr1.concat(arr2);
}

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// console.log(olderMovie(movies));

// console.log(countMovies(movies));

// console.log(onlyTitles(movies));

// console.log(onlyThisMillennium(movies));

// console.log(getMovieById(movies,"tt4154756"));

// console.log(sumYears(movies));

// console.log(searchMovie(movies,"lord"));

// console.log(searchAndDivide(movies,"lord"));

// console.log(deleteX(movies,5));
