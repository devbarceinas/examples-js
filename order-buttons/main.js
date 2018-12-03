(function() {

  'use strict';

  const newButton = document.querySelector('#generateButtons');

  const showButtons = () => {
    let element = '';
    for (let i = 1; i <= 20; i++) {
      let node = document.createElement('button');
      node.setAttribute('iter', i);
      node.className = 'btn';
      node.addEventListener('click', () => {
        alert(node.getAttribute('iter'));
      });

      let textNode = document.createTextNode(i);
      node.appendChild(textNode);
      element = document.getElementById('iter').appendChild(node);
    }

    return element;
  }

  showButtons();

})();