//https://stackabuse.com/reading-a-file-line-by-line-in-node-js

const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');

// let letters = ['a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
//   'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
//   'y', 'z'
// ];

const mostCommonThreeWords = (route) =>{
  // let arrayToHoldInfo = [];
  let threeWordHash = {};

  let count = 0;
  let newString = '';


  lineReader.eachLine(route, function(line) {
    console.log(line);
    console.log(`count is ${count}`)
    line = line.split(' ');
    console.log(line);
    for(let i = 0; i < line.length-2; i++){
      while((count < 3)){
        if(count === 0){
          newString = line[i+count]
        } else {
          newString = newString + ' ' + line[i+count]
        }
        count = count + 1;
        if(count === 3){

          if(threeWordHash.hasOwnProperty(newString) === true){
            threeWordHash[newString] = threeWordHash[newString] + 1;
          } else{
            threeWordHash[newString] = 1;
          }
        }
      }
      console.log(`count is ${count} newString is:: ${newString}`)
      newString = '';
      count = 0;
      console.log(`count is ${count} newString is:: ${newString}`)

      console.log(threeWordHash);
      console.log(newString);
      console.log(`count is ${count}`);
    }
  });
}

mostCommonThreeWords('./stuff.txt');