'use strict';

function BinarioADecimal(num) {


   for (let pocision = 0; pocision < num.length -1; num--) {
 
      numero=num.length[pocision];
      numRes=2**pocision;
   resultado=numres;
   }
   
   return resultado;


}






function DecimalABinario(num) {

return num.toString(2);


}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
