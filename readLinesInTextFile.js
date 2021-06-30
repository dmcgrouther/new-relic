const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');

const mostCommonThreeWords = (route) => {

  lineReader.eachLine(route, function(line) {
    console.log(line);
  })
  
}


mostCommonThreeWords('./stuff.txt');