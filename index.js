//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE



/*

Write a function that canfind the average balance 
of all of the customers in the dataset. You will 
need to know how to find the average of a set of 
numbers and know how to access the balance property 
in the object.

*/

function averageBalance(array){
  //CODE BELOW HERE
 var balance = 0
 for(var i = 0; i <= array.length - 1; i++){
 console.log(array[i].balance)
 
 totalSum += array[i].balance

 }
 totalSum /= array.length
  


  //CODE ABOVE HERE
}