
  'use strict';

  const textStyle = document.getElementById('title');
  const selectFontSize = document.getElementById('font-size');
  const selectFontColor = document.getElementById('font-color');
  const selectTextDecoration = document.getElementById('text-decoration');

  const changeStyle = (type = [], id) => {

    let add = '';
    
    for (const j of type) {
      add += `<option value="${j}">${j}</option>`;
    }
    
    id.innerHTML = add;
    return id;

  }

  const fontSize = (a) => {

    let sizeOption = (a.value || a.options[a.selectedIndex].value);
    textStyle.style.fontSize = sizeOption;

  }

  const colorChange = (a) => {

    let colorOption = (a.value || a.options[a.selectedIndex].value);
    textStyle.style.color = colorOption;

  }

  const textChange = (a) => {
   
    let decorationOption = (a.value || a.options[a.selectedIndex].value);
    textStyle.style.textDecoration = decorationOption;

  }

  changeStyle(['2em', '3em'], selectFontSize);
  changeStyle(['green', 'blue'], selectFontColor);
  changeStyle(['overline', 'underline'], selectTextDecoration);

