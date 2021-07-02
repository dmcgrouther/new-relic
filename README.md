How to run program (this assumes Node.js in stalled.)
1. Download from github to your local machine. https://github.com/dmcgrouther/new-relic/tree/main
2. In the directory, run this command: node oneString.js


If I had more time
1. Perhaps try a different language and library.
2. Structured differently. Right now it iterates twice through the book essentialy. I had a challenge with counting line to line. 
3. Docker file
4. Unicode characters
5. Hyphens

Assumptions
1. Returning an array of strings is acceptable
2. There are no line breaks. i.e. one line bre-, next line ak. 
3. I am assuming if there is an ending punctuation mark, there is nothing immediately after it. 
4. This list will catch the punctuation marks: ['.', ',', '!', ';', ':', "'", '"', '(', ')', '{', '}', '[', ']']
5. No blank spaces after the the last word in a line in the text file.


todo 
end of line /n
more arguments/files
test file if possible.