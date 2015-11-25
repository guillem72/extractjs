#extract.js

##Intro

This script is for test extraction from a json file.  The object is call info

##Files

The script is called extract.js. An interpreter for javascript is needed. I only tested it with [node.js] (https://nodejs.org/ "node.js home page")
course.json and 4.json are for testing. Thease files come from [coursera API](https://tech.coursera.org/app-platform/catalog/ "Coursera API catalog")

##Test

For testing:

nodejs extract.js course.json info.name ---> Feeding the World

nodejs extract.js 4.json info.links.courses[3] ---> 38


##Author and license 

Creator: Guillem LLuch Moll guillem72 gmail.com

License: MIT 
