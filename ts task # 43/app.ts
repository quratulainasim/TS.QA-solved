// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let magicians:string[]=["Robert","Peter","Andrew"];

function copyArr (arr:string[]){

    return [...arr];
}

function make_great(MagicianArray:string[]){
  for (let i=0; i<MagicianArray.length;i++){
    MagicianArray[i]="The Great "  + MagicianArray[i];
  }
}

function show_magicians(magician:string[]){
    magician.forEach(element => {
           console.log(element);
          
        });
   }

      let copyArray= copyArr (magicians)

  make_great(copyArray);
  console.log('\nThis is original Array');

 show_magicians(magicians);
 console.log('\nThis is modified Array');

 show_magicians(copyArray);