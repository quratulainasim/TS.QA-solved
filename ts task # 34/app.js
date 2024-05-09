// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
var pizza_names = ["Afghani tikka", "Chicken tikka", "Beef malai boti", "Ceramy white chicken"];
for (var i = 0; i < pizza_names.length; i++) {
    console.log("I like ".concat(pizza_names[i], " pizza."));
}
console.log("I really love pizza!");
// for (let pizaas of pizza_names){
//     console.log(`I like so much ${pizaas}`);
// }
// console.log(" when i want to change my mood so eat pizza ");
// console.log(" chicken tikka is very special for everyone");
// console.log('\n I raelly love pizza!\n');
