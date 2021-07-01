//https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript

const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');

const mostCommonThreeWords = (route) => {

  let newArr = [];
  let countOfLines = 0;
  let count = 0;
  
  let threeWordHash = {};

  let arrayToReturn = [];

  lineReader.eachLine(route, function(line) {
    // console.log(line);
    countOfLines = countOfLines + 1;
    // console.log(countOfLines)
  })

  var delayInMilliseconds = 1000; //1 second

  setTimeout(function() {
    //your code to be executed after 1 second
    lineReader.eachLine(route, function(line) {
      count++;
      // console.log(count);
      let splitLine = line.split(' ');
      for(let i = 0; i < splitLine.length; i++){
        newArr.push(splitLine[i]);
      }
      if(count === countOfLines){
        for (let j = 0; j < newArr.length-2; j++){
          // console.log(`newArr[j] is ${newArr[j]}`);
          let newString = '';
          let countWords = 0;
          while(countWords < 3){
            if(countWords === 0){
              newString = newArr[j];
            } else {
              newString = newString + ' ' + newArr[j+countWords];
              // console.log(newString);
            }
            countWords++;
            // console.log(newString)
          }
          // console.log(newString)
          if(threeWordHash.hasOwnProperty(newString)){
            threeWordHash[newString] = threeWordHash[newString] + 1;
          } else {
            threeWordHash[newString] = 1;
          }
        }
        // console.log(threeWordHash)
        let sortable = [];
        for (let string in threeWordHash) {
          sortable.push([string, threeWordHash[string]]);
        }
        
        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });
        // console.log(sortable)
        let stringToReturn = '';
        for(threeWordString in threeWordHash){
          stringToReturn = `${threeWordString} - ${threeWordHash[threeWordString]}`;
          // console.log(stringToReturn);
          arrayToReturn.push(stringToReturn);
          if(arrayToReturn.length === 100){
            return arrayToReturn;
          }
        }
        console.log(arrayToReturn)
        return arrayToReturn;
      }
    });
  }, delayInMilliseconds);
};

mostCommonThreeWords('./morestuff.txt');

// console.log(mostCommonThreeWords('./morestuff.txt'))

// mostCommonThreeWords('./stuff.txt');
// mostCommonThreeWords('./morestuff.txt');
// mostCommonThreeWords('./threes.txt');