// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 type item= 
 {
     name:string,
     price: number,
     origin:string
 }
 const dress: item= {

     name:"pantShirt",
     price:8000,
     origin:"UK", }
     
 const perfume:item = {
     
     name:"Single",
     price:3500,
     origin:"France",
 }
 console.log(`My eid dress is ${dress.name} from ${dress.origin} and its cost: ${dress.price} rupees`);
 console.log(`My eid perfume is ${perfume.name} from ${perfume.origin} and its cost: ${perfume.price} rupees`);
