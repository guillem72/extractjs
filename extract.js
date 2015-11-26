#!/usr/bin/env node
/*
 * This script is for test extraction from a json file
 * The object is call info
 * 
 * Creator: Guillem LLuch Moll guillem72 gmail.com
 * License: MIT
 * 
 * */
var fs=require("fs");
if (process.argv.length<4)
{
	console.error ('usage: "nodejs extract.js JSON_FILE JSON_ROUTE"');
}
else
{
	var jsonName=process.argv[2];
	var route=process.argv[3];
 try {	var jsonFile=fs.readFileSync(jsonName);
	var info=JSON.parse(jsonFile);
	console.log(eval(route));} catch (e) {console.error(e)}
	
}
