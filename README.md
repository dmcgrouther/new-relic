How to run program (this assumes Node.js in stalled.)
1. Download from github to your local machine. https://github.com/dmcgrouther/new-relic/tree/main
2. In the directory, run this command: node script.js


If I had more time
1. Get multiple text files working, remove \n, and have a test file. 
2. Structured differently. Right now it effectively iterates twice through the text file. Once to create an array of words, and then to go through that array of words to create a hashtable with the phrases and respective counts. I had a challenge with counting line to line so I iterated twice through. 
3. Docker file.
4. Unicode characters.
5. Hyphens.
6. Perhaps try a different language and library. 

Assumptions
1. Returning an array of strings is acceptable for the return.
2. There are no line breaks with a hyphen. i.e. one line bre-, next line ak. To spell break. 
3. I am assuming that if there is an ending punctuation mark ('.', ',', ';', ':'), there is nothing immediately after it. 
4. This list will catch the punctuation marks: ['.', ',', '!', ';', ':', "'", '"', '(', ')', '{', '}', '[', ']'].
5. No blank spaces after the the last word in a line in the text file.
6. Node JS is installed on the machine running the code. 