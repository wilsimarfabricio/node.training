var interval = function(callback, time){
   setTimeout(function(){
      callback();
      interval(callback, time);//recursivo
   }, time);
};

interval(function(){
   console.log("R: " + new Date());
}, 1000);