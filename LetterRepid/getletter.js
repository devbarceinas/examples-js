(function()  {

  'use strict';

  let saludo = 'asdfghjkfkkjjj';
  let splitSaludo = saludo.split('');
  let repetido = splitSaludo.sort((x,y) => splitSaludo.filter(e => e === x).length - splitSaludo.filter(e => e === y).length).pop();

  console.log(repetido);

})();