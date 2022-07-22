//jshint eversion:6

//  The Node REPL(Read Evaluation Print Loop)
//import fs from "fs";

const fs=require("fs");

fs.copyFileSync("file1.txt","file2.txt");

//     When we writr file1- I am file.
//    file2 - I am file2.txt .
// When we save it and run ->   node index.js      in hyper so file2 text will replaced by file1 text.
