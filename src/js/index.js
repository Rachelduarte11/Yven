import '../css/styles.css';

//Boton brillante reutilizable

import { createButton } from './buttons.js';

document.addEventListener('DOMContentLoaded', () => {
  const button1 = document.getElementById('button-1');
  button1.innerHTML = createButton('./src/index.html', 'Obtenlo gratis');

});
document.addEventListener('DOMContentLoaded', () => {
    const button2 = document.getElementById('button-2');
    button2.innerHTML = createButton('./src/index.html', 'VEEN');
  });
