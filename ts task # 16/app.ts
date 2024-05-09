
// TASK # 16

// . More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

 let GuestList :string[]=["Saleem","Maryam","Asim","Khirad","Ibtisam"];

//   for(let i=0; i<GuestList.length; i++){
   //   console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);  
//   }

 let not_present:string="Maryam";
 let new_guest: string="Hafeez";
 GuestList [1]=new_guest;


 for(let i=0; i<GuestList.length; i++){
    console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);

 console.log(`Mrs. ${not_present} will not coming tomorrow  for dinner.`);
 
 GuestList.unshift("Mursaleen");
 GuestList.splice(3,0,"Nusrat");
 GuestList.push("Sana");
 for(let i=0; i<GuestList.length; i++){
     console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);


 }
}