//jshint eversion:6

/*


//  The Node REPL(Read Evaluation Print Loop)
//import fs from "fs";

//const fs=require("fs");

//fs.copyFileSync("file1.txt","file2.txt");

//     When we writr file1- I am file.
//    file2 - I am file2.txt .
// When we save it and run ->   node index.js in hyper so file2 text will replaced by file1 text.

*/

/* 
npm init
then ,   some of them comes  by default and rest of them fill by yourself
version: (1.0.0)        
description: This is a intro to node project   // Write yourself                                 
entry point: (index.js)                                                           
test command:                                                                     
git repository: (https://github.com/Mitali2700/Introduction_Node.js.git)          
keywords:                                                                         
author: Mitali Gupta     // Write yourself

npmjs.com-  choose package as per your choice 
write:-   npm install superheroes
then you will get dependencies inside package.json


*/


/********************* superheroes package***********************/

var superheroes = require("superheroes");
//import { random } from "superheroes";
var mySuperheroName= superheroes.random();
console.log("Superhero: "+mySuperheroName);


/********************* supervillains package***********************/
const supervillains = require('supervillains');
 
var mySupervilliansName = supervillains.random();
console.log( "Supervillain: " +mySupervilliansName);

/* 
Github Readme
<h1 align="center">Introduction to Node.js</h1>


<p align="center">
fs.copyFileSync("file1.txt","file2.txt");
<br>When we write <br>
file1- I am file.<br>
file2 - I am file2.txt .<br>
When we save it and run ->   node index.js in hyper so file2 text will replaced by file1 text.
</p>
<br>
<hr>

Example: Using superhero package<br>
var superheroes = require("superheroes");<br>
var mySuperheroName= superheroes.random();<br>
console.log(mySuperheroName);
 */
