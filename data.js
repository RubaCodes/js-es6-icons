// FUNCTIONS
//funzione ch e genera una stringa esadecimale da utilizzare come colore
const randomHexColorGenerator = function () {
  const char = '0123456789abcdef';
  const color = [];
  while (color.length < 6) {
    color.push(char[Math.ceil(Math.random() * char.length) - 1]);
  }
  return `#${color.join('')}`;
};

// DATA
const faIcons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue',
  },
];

//primo print di default al caricamento della pagina
const container = document.querySelector('#container');
const tplBoxHtml = document.querySelector('.tpl-box').content;
faIcons.forEach((e) => {
  const boxHtml = tplBoxHtml.cloneNode(true);
  //costruire il nome della classe
  const className = `fa-solid ${e.prefix}${e.name}`;
  boxHtml.querySelector('.box i').className = className;
  //2.Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
  //bonus 1 ,random color generator sulla proprieta color degli elementi
  e.color = randomHexColorGenerator();
  boxHtml.querySelector('.box i').style.color = e.color;
  boxHtml.querySelector('.box span').textContent = e.name; //appendi nodo
  container.append(boxHtml);
});
//3.Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
const filterSelect = document.querySelector('#type-filter');
let filteredArray = [];
filterSelect.addEventListener('change', function () {
  if (this.value === 'default') {
    filteredArray = faIcons;
  } else {
    filteredArray = faIcons.filter((e) => e.type === this.value);
  }
  container.innerHTML = '';
  //popolo il container
  filteredArray.forEach((e) => {
    const boxHtml = tplBoxHtml.cloneNode(true);
    //costruire il nome della classe
    const className = `fa-solid ${e.prefix}${e.name}`;
    boxHtml.querySelector('.box i').className = className;
    //2.Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
    boxHtml.querySelector('.box i').style.color = e.color;
    boxHtml.querySelector('.box span').textContent = e.name; //appendi nodo
    container.append(boxHtml);
  });
});
