//usado para forçar a execução de uma instrução após a execução de uma outra;
//registra a execução no primeiro eventloop e executa no segundo eventloop
console.log("A " + new Date());
setTimeout(function(){
   console.log("I " + new Date());
}, 0);
console.log("B " + new Date());