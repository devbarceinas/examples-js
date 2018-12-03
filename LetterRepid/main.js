(function() {

  'use strict';

  // let indices= [], i, j;
  // let name = 'superr';
  // let splitName = name.split('');

  // for(i = 0; i < splitName.length; i++) {
  //   for (j = 0; j < i.length; j++) {
  //     console.log(splitName[j]);
  //   }
  // }

  // if (splitName[i] === 'r') {
  //   indices.push(i);
  // }

  // indices.map((a, index) => {
  //   console.log(`${index} : ${a}`);
  // });

  var hello = "mario joaquin";
  var histogram = {};

  for (var i = 0, len = hello.length; i < len; i++) {
      
      var letter = hello[i];
      histogram[letter] = (histogram[letter] || 0) + 1;

  }
  
  for (const prop in histogram) {
    if (histogram[prop] >= 2) {
      console.log(prop);
    }
  }

  let name = {
    color: {

    },
    fonsize
  }

})();