// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
    //  print a message indicating the number of people you are inviting to dinner.
    
      let GuestList :string[]=["Saleem","Maryam","Asim","Khirad","Ibtisam"];
// for(let i=0; i<GuestList.length; i++){
   // console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);  
// }
let not_present:string="Maryam";
let new_guest: string="Hafeez";
GuestList [1]=new_guest;

// for(let i=0; i<GuestList.length; i++){
//   console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);

// console.log(`Mrs. ${not_present} will not coming tomorrow  for dinner.`);

GuestList.unshift("Mursaleen");
GuestList.splice(GuestList.length/2,0,"Nusrat");
GuestList.push("Sana");
// for(let i=0; i<GuestList.length; i++){
  //  console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);
// }
 //console.log(`\n "In new table for dinner only two guest space available."\n`);

 while(GuestList.length>2){
 let remove_guest=GuestList.pop();
    //  console.log(`\n Respected Sir/Madam ${remove_guest}, Sorry you can't invited for dinner. \n`);
 }
//  for(let i=0; i<GuestList.length; i++){
//  console.log('Respected Sir/Medam'   +  "  " +  GuestList[i] + '\n you are still invited for dinner. \n');
 //}
 GuestList.splice(0,2);
 console.log(GuestList);

 console.log( `The number of Guest is : ${GuestList.length} `);
      
