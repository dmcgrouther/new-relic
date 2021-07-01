const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');

const mostCommonThreeWords = (route) => {

  let threeWordHash = {};

  let count = 0;
  let newString = '';
  let remainder;

  lineReader.eachLine(route, function(line) {
    let splitLine = line.split(' ');
    console.log(`new line... splitLine is ${splitLine}`);
    for(let i = 0; i < splitLine.length; i++){
      remainder = count

      // count++;
      // console.log(`splitLine[i] is ${splitLine[i]} count is ${count}`);

      // if(count === 1){
      //   newString = splitLine[i];
      // } else if(count === 2) {
      //   newString = newString + ' ' + splitLine[i];
      // } else if(count === 3){
      //   newString = newString + ' ' + splitLine[i];
      //   console.log(newString);
      //   count = 0;
      //   newString = '';
      // }



      // case for space -- code rught below this functions as intended. 
      // if(i+count < splitLine.length-2){
      //   while(count < 3){
      //     if(count === 0){
      //       newString = splitLine[i+count]
      //     } else if(count === 1){
      //       newString = newString + ' ' + splitLine[i+count];
      //     } else {
      //       newString = newString + ' ' + splitLine[i+count];
      //       console.log(newString);
      //       if(threeWordHash.hasOwnProperty(newString)){
      //         threeWordHash[newString] = threeWordHash[newString] + 1;
      //       } else {
      //         threeWordHash[newString] = 1;
      //       }

      //     }
      //     count++;
      //   }
      //   count = 0;
      //   newString = '';
      //   console.log(threeWordHash);
      // } 

      // i+count     i+count-remainder

      if(i+count === splitLine.length-2){ //case for two more words
        if(count === 0){
          newString = splitLine[i+count-remainder];
          console.log(`count is ${count} newString is: ${newString}`);
          count++;
        } else if(count === 1) {
          newString = newString + ' ' + splitLine[i+count-remainder];
          console.log(`count is ${count} newString is: ${newString}`);
          count++;
        } else {
          newString = newString + ' ' + splitLine[i+count-remainder];
          console.log(`count is ${count} newString is: ${newString}`);
          if(threeWordHash.hasOwnProperty(newString)){
            threeWordHash[newString] = threeWordHash[newString] + 1;
          } else {
            threeWordHash[newString] = 1;
          }
          count = 0;
          newString = '';
        }
        // count++;
      } 

      if(i+count === splitLine.length-1){ //case for last word
        console.log('look here')
        if(count === 0){
          newString = splitLine[i+count-remainder];
          console.log(`count is ${count} newString is: ${newString}`);
          count++;
        } else if(count === 1) {
          newString = newString + ' ' + splitLine[i+count-remainder];
          console.log(`count is ${count} newString is: ${newString}`);
          count++;
        } else {
          newString = newString + ' ' + splitLine[i+count-remainder];
          console.log(`count is ${count} newString is: ${newString}`);
          if(threeWordHash.hasOwnProperty(newString)){
            threeWordHash[newString] = threeWordHash[newString] + 1;
          } else {
            threeWordHash[newString] = 1;
          }
          count = 0;
          newString = '';
        }
      } 


    }
  });
};


// mostCommonThreeWords('./stuff.txt');
mostCommonThreeWords('./morestuff.txt');
// mostCommonThreeWords('./threes.txt');