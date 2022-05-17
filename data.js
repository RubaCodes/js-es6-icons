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
//funzione che popola il container , un po no schifo perche non generica
const printBoxes = function (array) {
  array.forEach((e) => {
    const boxHtml = tplBoxHtml.cloneNode(true);
    //costruire il nome della classe e assegnarlo
    const className = `fa-solid ${e.prefix}${e.name}`;
    boxHtml.querySelector('.box i').className = className;
    //2.Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
    //bonus 1, colore hex random
    e.color = randomHexColorGenerator();
    boxHtml.querySelector('.box i').style.color = e.color;
    boxHtml.querySelector('.box span').textContent = e.name; //appendi nodo
    container.append(boxHtml);
  });
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

//bonus 2. determinare dinamicamente le varie categorie
//fetch delle categorie
const allTypes = ['all'];
faIcons.forEach((e) => {
  if (!allTypes.includes(e.type)) allTypes.push(e.type);
});
//aggiungo le categorie con template literal
const filterSelect = document.querySelector('#type-filter');
for (let i = 0; i < allTypes.length; i++) {
  filterSelect.innerHTML += `<option class="${i + 1}-option" value="${
    allTypes[i]
  }">
     ${allTypes[i].toUpperCase()} 
    </option>`;
}
//hook ai tag necessari per la clonazione
const container = document.querySelector('#container');
const tplBoxHtml = document.querySelector('.tpl-box').content;
//primo print di default al caricamento della pagina su categoria all
printBoxes(faIcons);
//3.Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
let filteredArray = [];
filterSelect.addEventListener('change', function () {
  if (this.value === 'all') {
    filteredArray = faIcons;
  } else {
    filteredArray = faIcons.filter((e) => e.type === this.value);
  }
  //pulizia dell'inner html al change
  container.innerHTML = '';
  //popolo il container
  printBoxes(filteredArray);
});
