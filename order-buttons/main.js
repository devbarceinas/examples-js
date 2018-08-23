(function() {
    'user strict';

    const newButton = document.querySelector('#generateButtons');
    const arrNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    const showButtons = () => {
        for (let buttons of arrNumbers) {
            let node = document.createElement('button');
            node.setAttribute('iter', buttons);
            node.addEventListener('click', () => {
               alert(node.getAttribute('iter')); 
            });
            let textNode = document.createTextNode(buttons);
            node.appendChild(textNode);
            document.getElementById('iter').appendChild(node);
        }
    }

    newButton.addEventListener('click', showButtons);
})();