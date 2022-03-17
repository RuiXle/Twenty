var friend1 = "ImaginaryFriend1";
var friend2 = "ImaginaryFriend2";
var friend3 = "ImaginaryFriend3";
var friend4 = "ImaginaryFriend4";
var friend5 = "ImaginaryFriend5";
var friend6 = "ImaginaryFriend6";
var friend7 = "ImaginaryFriend7";
var friend8 = "ImaginaryFriend8";
var friend9 = "ImaginaryFriend9";
var friend10 = "ImaginaryFriend10";

var friends = ["ImaginaryFriend1", "ImaginaryFriend2", "ImaginaryFriend3", "ImaginaryFriend4","ImaginaryFriend5" ,"ImaginaryFriend6" ,"ImaginaryFriend7","ImaginaryFriend8","ImaginaryFriend9" ,"ImaginaryFriend10"]

console.log(friends);

friends[1] = "Elon Musk";  
friends[4] = "Jeff Bezo";   
friends[8] = "Bill Gates";

console.log(friends.length);
console.log(friends.sort());

var x = friends.pop();

console.log(friends);

friends.push("BOB");

console.log(friends);

friends.shift();

console.log(friends);

friends.unshift("TOM");

console.log(friends);