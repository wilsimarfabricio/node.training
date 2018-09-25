var max = 10000;

/* varia��o 1
var generate = function(){
   return Math.floor(Math.random() * max);
};*/

/* varia��o 2
module.exports.generate =  function(){
   return Math.floor(Math.random() * max);
};

exports.generate =  function(){
   return Math.floor(Math.random() * max);
};


this.generate =  function(){
   return Math.floor(Math.random() * max);
}; */

/* varia��o 3
//apenas o module.exports � retornado da fun��o require
this.generate =  function(){
   return Math.floor(Math.random() * max);
};

module.exports = {
   max: max
};*/

exports.generate =  function(){
   return Math.floor(Math.random() * max);
};