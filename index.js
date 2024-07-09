let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});

/*
Question 1: Return Only the Even Numbers

Define the function filterEvenNumbers to return only the even numbers from an array.

Declare a GET endpoint /even-numbers to use the filterEvenNumbers function.

Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(eachNum) {
  return eachNum % 2 === 0;
}
app.get("/even-numbers", (req, res) => {
  let evenNumbersArray = numbersArray.filter((eachNumber) =>
    filterEvenNumbers(eachNumber),
  );
  res.json(evenNumbersArray);
});

/*
Question 2: Return Only the Ages Greater Than 18

Define the function filterAges to return only the ages greater than 18 from an array.

Declare a GET endpoint /adult-ages to use the filterAges function.

Given Data: [10, 20, 30, 15, 17, 25]
*/
let agesArray = [10, 20, 30, 15, 17, 25];
function filterAges(Age) {
  return Age > 18;
}

app.get("/adult-ages", (req, res) => {
  let adultAgesArray = agesArray.filter((eachAge) => filterAges(eachAge));
  res.json(adultAgesArray);
});

/*
Question 3: Return Only the Words Longer Than 5 Characters

Define the function filterLongWords to return only the words longer than 5 characters from an array of words.

Declare a GET endpoint /long-words to use the filterLongWords function.

Given Data: ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']

*/

let wordsArray = ["apple", "banana", "cherry", "date", "fig", "grape"];
function filterLongWords(Word) {
  return Word.length > 5;
}

app.get("/long-words", (req, res) => {
  let longWordsArray = wordsArray.filter((eachWord) =>
    filterLongWords(eachWord),
  );
  res.json(longWordsArray);
});

/*
Question 4: Return Only the Files Smaller Than a Certain Size

Define the function filterSmallFiles to return only the files smaller than a certain size from an array of file sizes

Declare a GET endpoint /small-files to use the filterSmallFiles function.

Declare a variable named filterParam to take the input from query parameters.

The size filter parameter should be read from the query string.

Given Data: [50, 200, 75, 120, 30, 90, 150]
*/
let fileSizesArray = [50, 200, 75, 120, 30, 90, 150];
function filterSmallFiles(eachFileSize, filterParam) {
  return eachFileSize < filterParam;
}
app.get("/small-files", (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let smallFilesArray = fileSizesArray.filter((eachFileSize) =>
    filterSmallFiles(eachFileSize, filterParam),
  );

  res.json(smallFilesArray);
});
