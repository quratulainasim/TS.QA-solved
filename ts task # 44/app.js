// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich(item) {
    item.forEach(function (Element) { return console.log('\nMaking sandwitch with:' + Element); });
    console.log("\n I made super Sandwitch\n");
}
makeSandwich(["chicken", "cheese", "lettuse"]);
makeSandwich(["beef", "peanut butter", "cucumber"]);
makeSandwich(["fried fish", "cheese", "tomatto"]);
