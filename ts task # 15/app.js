// TASK # 15
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
//  in your list
var GuestList = ["Saleem", "Maryam", "Asim", "Khirad", "Ibtisam"];
for (var i = 0; i < GuestList.length; i++) {
    console.log("Respected Sir/Madam" + " " + GuestList[i] + "\n I would like to invite you at dinner tomorrow.\n Thanks\n");
}
var not_present = "Maryam";
var new_guest = "Hafeez";
GuestList[1] = new_guest;
for (var i = 0; i < GuestList.length; i++) {
    console.log("Respected Sir/Madam" + " " + GuestList[i] + "\n I would like to invite you at dinner tomorrow.\n Thanks\n");
}
console.log("Mrs. ".concat(not_present, " will not coming tomorrow  for dinner."));
