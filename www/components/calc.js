// This is a JavaScript file

window.onload = function() {
  const display = document.querySelector("#display");

  let valor;
  let valor1;
  let op;

  const numerico = document.querySelectorAll(".numerico");
 
 let botoes = Array.prototype.filter.call(numerico, function(botao) {
   botao.addEventListener('click', function() {
     valor = display.value;
     valor += this.value;
     display.value = valor;
   });
 });
   document.querySelector("#sub").addEventListener('click', function() {
        valor1 = display.value;
        display.value = "";
        op = "sub";
   });

   document.querySelector("#mult").addEventListener('click', function() {
        valor1 = display.value;
        display.value = "";
        op = "mult";
   });

 document.querySelector("#div").addEventListener('click', function() {
        valor1 = display.value;
        display.value = "";
        op = "div";
   });

   document.querySelector("#somar").addEventListener('click', function() {
        valor1 = display.value;
        display.value = "";
        op = "soma";
   });

   document.querySelector("#igual").addEventListener('click', function(){
      let valor2 = display.value;
      if(op == 'sub') {
         display.value = valor1- valor2;
      }
       if(op=='div') {
         display.value = parseFloat(valor1) / parseFloat(valor2);
       }
       if (op=='mult') {
        display.value = parseFloat(valor1) * parseFloat(valor2);
      }
     if (op =='soma') {
        display.value = parseFloat(valor1) + parseFloat(valor2);
      }
      document.querySelector("#c").addEventListener('click', function() {
        valor1 = "";
        display.value = "";
        op = "";
      });
   });
}