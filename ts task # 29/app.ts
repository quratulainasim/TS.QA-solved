// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!


   let favorite_fruit:string[]=["peach","orange","cherry","mango" ];
  
 if (favorite_fruit.includes("peach")){
     console.log("you really like peach");
 }
  if (favorite_fruit.includes("orange")){
       console.log("you really like a orange");
 }
 if (favorite_fruit.includes("cherry")){
     console.log("you really like a cherry");
 }
 if (favorite_fruit.includes("mango")){
     console.log("you really like a mango");
 }
 if (favorite_fruit.includes("Pineapple")){
    console.log ("you really like a Pineapple");
 }