'use strict';

function BinarioADecimal(num) {


   let decimal = 0;
   let binario = num.toString();
   let binarioArray = binario.split("");
   let binarioArrayReverse = binarioArray.reverse();
   for (let i = 0; i < binarioArrayReverse.length; i++) {
     if (binarioArrayReverse[i] == 1) {
       decimal += Math.pow(2, i);
     }
   }
   return decimal;

}






function DecimalABinario(num) {

   let array = [];
   let str = "";
   for (let i = 0; i < 9999; i++) {
     if (num < 1) {
       break;
     }
     let a = num % 2;
     array.unshift(a);
     num = Math.floor(num / 2);
   }
   for (let i = 0; i < array.length; i++) {
     str = str + array[i];
   }
   return str;


}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
