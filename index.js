import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// var react = require("react");
// var xyz = require("react-dom");

var abc = "mistry";
var x= "hii";

// normal_js 
console.log("My name is shraddha" + abc);
//normal_js_2
console.log("My name is shraddha",abc);

// es6
console.log(`My name is shraddha ${abc}${2+3}`)

// normal_js 
console.log("My name is shraddha "+abc+ " Testing " +x);

// es6
console.log(`My name is shraddha ${abc}${2+3} & we are testing ${x}`)

ReactDOM.render(
  <>
    <h1 id="sm" style={{color:"red"}}>Hello World {2+3}{abc}</h1>
    <div className="sm-bg"> Name : <input type="text" /></div>
  </>,
  document.getElementById("root"));


