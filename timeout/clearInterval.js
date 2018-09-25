//irá repetir a cada 1s
var i = setInterval(function(){
   console.log("i: " + new Date());
}, 1000);

//encerra o intervalo após 5s
setTimeout(function(){
   clearInterval(i);
}, 5000);
