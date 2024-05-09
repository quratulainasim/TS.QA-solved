// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magicians:string[]=["Robert","Peter","Andrew"];
function show_magicians(magician:string[]){
  magician.forEach(element => {
         console.log(element);
        
      });
 }
//  show_magicians(magicians);

function make_great(magician:string[]){
     for (let i=0; i<magician.length; i++){
    magician[i]="The Great "   +  magician[i];
     }
 }
    
make_great(magicians); //the original array
show_magicians(magicians);  // the modified array
