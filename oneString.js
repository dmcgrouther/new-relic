//https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript

const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');

let punctuationMarks = ['.', ',', '!', ';', ':', "'", '"', '(', ')', '{', '}', '[', ']'];

const checkForAndRemovePunctuation = (sampleString) => {
  let sampleStringToArray =  sampleString.split('');
  for(let i = 0; i < sampleStringToArray.length-1; i++){
    if(punctuationMarks.includes(sampleStringToArray[i])){
      // console.log(`i is ${i} sampleStringToArray[i] is ${sampleStringToArray[i]}`)
      sampleStringToArray.splice(i,1)
      i = -1
    }
  }
  if(punctuationMarks.includes(sampleStringToArray[sampleStringToArray.length-1])){
    sampleStringToArray.pop()
  }
  sampleString = sampleStringToArray.join('')
  // console.log(sampleString)
  return sampleString
}

const mostCommonThreeWords = (route) => {

  let newArr = [];
  let countOfLines = 0;
  let count = 0;
  
  let threeWordHash = {};

  let arrayToReturn = [];

  lineReader.eachLine(route, function(line) {
    countOfLines = countOfLines + 1;
  })

  var delayInMilliseconds = 1000; //1 second

  setTimeout(function() { //your code to be executed after 1 second
    lineReader.eachLine(route, function(line) {
      count++;
      let splitLine = line.split(' ');
      for(let i = 0; i < splitLine.length; i++){

        let wordCheckedForPunctuation = checkForAndRemovePunctuation(splitLine[i]);
        // console.log(wordCheckedForPunctuation);
        // wordCheckedForPunctuation = wordCheckedForPunctuation.replace('\n', ''); //TODO get this to work
        // console.log(wordCheckedForPunctuation);

        newArr.push(wordCheckedForPunctuation);
      }
      if(count === countOfLines){
        for (let j = 0; j < newArr.length-2; j++){
          // console.log(`newArr[j] is ${newArr[j]}`);
          let newString = '';
          let countWords = 0;
          while(countWords < 3){
            if(countWords === 0){
              newString = newArr[j].toLowerCase();
            } else {
              newString = newString + ' ' + newArr[j+countWords].toLowerCase();
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

        for(let k = 0; k < sortable.length; k++){
          stringToReturn = `${sortable[k][1]} - ${sortable[k][0]}`;
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

// mostCommonThreeWords('./morestuff.txt');
// mostCommonThreeWords('./stuff.txt');
mostCommonThreeWords('./morestuff3.txt');
// mostCommonThreeWords('./threes.txt');