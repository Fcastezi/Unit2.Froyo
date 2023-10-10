//prompt the user for froyo flavors , store their result
  const userInput = prompt('enter a list of froyo flavors separated by commas');
//The user's input string is split into an array of strings
  const stringArray = userInput.split(',');
//make a funtion that returns an objects that handles the flavors and the amounts of each flavor
function countOrders() {
//build an object to track which flavors you have observed so far and the amounts of each flavor
  const itemCount = {};
//make a loop to iterate through the array of flavors
for (let string of stringArray) {
 if (itemCount[string]) {
    itemCount[string] += 1;
}  else {
    itemCount[string] = 'empty';
   }
}
 return itemCount;
}
//print the flavors and amount of flavors
console.table(countOrders());




