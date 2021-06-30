const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');

const mostCommonThreeWords = (route) => {

  let threeWordHash = {};

  let count = 0;
  let newString = '';

  lineReader.eachLine(route, function(line) {
    let splitLine = line.split(' ');
    console.log(`new line... splitLine is ${splitLine}`);
    for(let i = 0; i < splitLine.length; i++){
      count++;
      console.log(`splitLine[i] is ${splitLine[i]} count is ${count}`);

      if(count === 1){
        newString = splitLine[i];
      } else if(count === 2) {
        newString = newString + ' ' + splitLine[i];
      } else if(count === 3){
        newString = newString + ' ' + splitLine[i];
        console.log(newString);
        count = 0;
        newString = '';
      }
    }
  });
  
};


mostCommonThreeWords('./stuff.txt');