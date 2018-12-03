(function()  {

  'use strict';

  const searchLetter = (saludo) => {
    let splitSaludo = saludo.split('');
    let repetido = splitSaludo.sort((x, y) => splitSaludo.filter(e => e === x).length - splitSaludo.filter(e => e === y).length).pop();
    return repetido;
  }

  console.log(searchLetter('asdfghjkfkkjjj'));

})();