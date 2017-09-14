'use strict';
module.exports = function() {
  
  var Rando = Math.floor(Math.random()*1000000 + 1);
  return function (){
    return Rando;
   
  };
};



