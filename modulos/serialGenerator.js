var max = 10000;

/* variação 1
var generate = function(){
   return Math.floor(Math.random() * max);
};*/

/* variação 2
module.exports.generate =  function(){
   return Math.floor(Math.random() * max);
};

exports.generate =  function(){
   return Math.floor(Math.random() * max);
};


this.generate =  function(){
   return Math.floor(Math.random() * max);
}; */

/* variação 3
//apenas o module.exports é retornado da função require
this.generate =  function(){
   return Math.floor(Math.random() * max);
};

module.exports = {
   max: max
};*/

exports.generate =  function(){
   return Math.floor(Math.random() * max);
};