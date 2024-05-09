// TASK # 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//  of your program.

let GuestList :string[]=["Saleem","Maryam","Asim","Khirad","Ibtisam"];

// for(let i=0; i<GuestList.length; i++){
   // console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);  
// }
let not_present:string="Maryam";
let new_guest: string="Hafeez";
GuestList [1]=new_guest;

// for(let i=0; i<GuestList.length; i++){
//   console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);

console.log(`Mrs. ${not_present} will not coming tomorrow  for dinner.`);

GuestList.unshift("Mursaleen");
GuestList.splice(GuestList.length/2,0,"Nusrat");
GuestList.push("Sana");
for(let i=0; i<GuestList.length; i++){
   console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);
}
 console.log(`\n "In new table for dinner only two guest space available."\n`);

 while(GuestList.length>2){
 let remove_guest=GuestList.pop();
     console.log(`\n Respected Sir/Madam ${remove_guest}, Sorry you can't invited for dinner. \n`);
 }
 for(let i=0; i<GuestList.length; i++){
 console.log('Respected Sir/Medam'   +  "  " +  GuestList[i] + '\n you are still invited for dinner. \n');
 }
 GuestList.splice(0,2);
 console.log(GuestList);
