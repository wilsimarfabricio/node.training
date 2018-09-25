var serialGenerator = require("./modulos/serialGenerator.js");

/* variação 2
console.log(serialGenerator)
console.log(serialGenerator.generate);
console.log(serialGenerator.generate());*/

/* variação 3
console.log(serialGenerator);
//console.log(serialGenerator.generate);
//console.log(serialGenerator.generate());*/

console.log(serialGenerator.generate());

var pararel = function(){
   var i = 0;
   while(i < 10000 ){
      i++;
      if(i == 9999){
         console.log("A: " + new Date());
      }
   };
   console.log("B: " + new Date());
   return true;
};

var printConsole = function(){
   if (pararel()){
      console.log("C: " + new Date());
   }
};

printConsole();