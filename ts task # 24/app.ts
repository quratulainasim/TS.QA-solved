// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Equality / Inequality 

 let bike:string = "suzuki150";
 console.log("Is bike == 'suzuki150'? I predict True.")
 console.log(bike == 'suzuki150');
  console.log ("Is bike !='suzuki150' ? I predict False")
 console.log (bike!='suzuki150');

// Lower case function 

 let myName:string="QURATULAIN";
  console.log (" Is QURATULAIN toLowercase()==quratulain ? I predict True");
  console.log(myName.toLowerCase()=="quratulain");

  let MyName:string="QURATULAIN";
   console.log (" Is QURATULAIN toLowercase()!==QURATULAIN? I predict False");
   console.log(myName.toLowerCase()=="QURATULAIN");
 
//  Numeric test

 let bc=4;
 let ae=8;
 console.log("ae>bc ? I predict True");
 console.log(ae>bc);
 console.log("ae=<bc ? I predict False");
 console.log(ae<=bc);
 console.log("bc<ae ? I predict True");
 console.log(bc<ae);
 console.log("bc>=ae ? I predict False");
 console.log(bc>=ae);
 console.log("ae=bc ? I predict False");
 console.log(ae==bc);
 console.log("ae !==bc ? I predict True");
 console.log(ae !==bc);


// And / Or Operator

 let a:number=5;
 let b:number=8;
  console.log("Is a<b && b>a ? I predict True");
  console.log(a<b);
 console.log("Is a>b || b<a ? Ipredict False");
 console.log(a>b);

// wether in array
   let fruits:string[]=["apple", "banana","pineapple","apricot"];
 console.log("Is apple in array ?I predict True");
 console.log(fruits.includes("apple"));

// //  whether not array
 console.log("Is Pineapple is not in array ?");
   console.log(fruits.includes("Pineapple"));