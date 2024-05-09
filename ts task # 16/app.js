// TASK # 16
// . More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var GuestList = ["Saleem", "Maryam", "Asim", "Khirad", "Ibtisam"];
//   for(let i=0; i<GuestList.length; i++){
//   console.log("Respected Sir/Madam"   + " " + GuestList[i]  + `\n I would like to invite you at dinner tomorrow.\n Thanks\n`);  
//   }
var not_present = "Maryam";
var new_guest = "Hafeez";
GuestList[1] = new_guest;
for (var i = 0; i < GuestList.length; i++) {
    console.log("Respected Sir/Madam" + " " + GuestList[i] + "\n I would like to invite you at dinner tomorrow.\n Thanks\n");
    console.log("Mrs. ".concat(not_present, " will not coming tomorrow  for dinner."));
    GuestList.unshift("Mursaleen");
    GuestList.splice(3, 0, "Nusrat");
    GuestList.push("Sana");
    for (var i_1 = 0; i_1 < GuestList.length; i_1++) {
        console.log("Respected Sir/Madam" + " " + GuestList[i_1] + "\n I would like to invite you at dinner tomorrow.\n Thanks\n");
    }
}
