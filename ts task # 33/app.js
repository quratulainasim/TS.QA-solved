// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
var ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_num_1 = ordinal_num; _i < ordinal_num_1.length; _i++) {
    var num = ordinal_num_1[_i];
    var ordinalNumber = "string";
    if (num === 1) {
        ordinalNumber = "st";
    }
    else if (num === 2) {
        ordinalNumber = "nd";
    }
    else if (num === 3) {
        ordinalNumber = "rd";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(num, " ").concat(ordinalNumber));
}
