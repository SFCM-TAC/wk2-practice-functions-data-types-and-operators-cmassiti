
function sayHello(name) {
  return ('Hello, ' + name + "!!")
  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"
}

function sayHelloEverybody(threeNames) {
  threeNames = ['Cole', ' MaryClare', ' and Adrema Justice'];
  return ('Hello ' + threeNames + '!!')

  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
}

function getClasses() {
  classes = [ 'Sound Design', ' Private Composition', ' Intro to Logic',
 ' Tools, Techniques, and Analysis', ' Intro to Recording', ' Composition Workshop',
 ' Computer Science', ' and Music Business'];
  return (classes + ".")

  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
}

function labelOrder(fiveNumbers) {
  var fiveNumbers = [1,2,3,4,5];
  var newArray = ["","","","",""];

  newArray[0] = "first: " + fiveNumbers[0];
  newArray[1] = " second: " + fiveNumbers[1];
  newArray[2] = " third: " + fiveNumbers[2];
  newArray[3] = " fourth: " + fiveNumbers[3];
  newArray[4] = " fifth: " + fiveNumbers[4];

  return (newArray)

  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items
}

function calculateVolume(w, l, h) {

  var w = 3
  var l = 6
  var h = 9
  var volume = w * l * h

  return (volume)

  // TODO: given a room's width, length, and height
  // write a function that returns the volume
}

function isOdd(n) {
  var n = 4

	if (n%1 == 0)
		return true;
	else
		return false;
}

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {
  var saleAmount;

  saleAmount = originalPrice - (originalPrice * .25)

  return saleAmount;

  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)
}

const salesAmounts = .25
function getSalePrices(threeOriginalPrices) {
  var priceOne = threeOriginalPrices[0];
  var priceTwo = threeOriginalPrices[1];
  var priceThree = threeOriginalPrices[2];
  var salesAmountsOne = getSalePrice(priceOne);
  var salesAmountsTwo = getSalePrice(priceTwo);
  var salesAmountsThree = getSalePrice(priceThree);

  return [salesAmountsOne, salesAmountsTwo, salesAmountsThree];

  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter() {

counter++;
showCounter(counter);

  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!
}

function showCounter(increment) {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}

function changeElement(id) {
  var el = document.getElementById(id);
  el.style.color = "red";
  el.style.fontSize = "15px";
  el.style.backgroundColor = "#FFFFFF";
}
