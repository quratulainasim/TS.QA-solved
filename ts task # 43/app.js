// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Robert", "Peter", "Andrew"];
function copyArr(arr) {
    return __spreadArray([], arr, true);
}
function make_great(MagicianArray) {
    for (var i = 0; i < MagicianArray.length; i++) {
        MagicianArray[i] = "The Great " + MagicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
var copyArray = copyArr(magicians);
make_great(copyArray);
console.log('\nThis is original Array');
show_magicians(magicians);
console.log('\nThis is modified Array');
show_magicians(copyArray);
