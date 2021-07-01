//https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript

const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');

const mostCommonThreeWords = (route) => {

  let newArr = [];
  let countOfLines = 0;
  let count = 0;
  
  let threeWordHash = {};

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
      console.log(count);
      let splitLine = line.split(' ');
      for(let i = 0; i < splitLine.length; i++){
        newArr.push(splitLine[i]);
      }
      if(count === countOfLines){
        for (let j = 0; j < newArr.length-2; j++){
          console.log(`newArr[j] is ${newArr[j]}`);
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
          console.log(newString)
        }
      }
    });
  }, delayInMilliseconds);
};

mostCommonThreeWords('./morestuff.txt');

// mostCommonThreeWords('./stuff.txt');
// mostCommonThreeWords('./morestuff.txt');
// mostCommonThreeWords('./threes.txt');