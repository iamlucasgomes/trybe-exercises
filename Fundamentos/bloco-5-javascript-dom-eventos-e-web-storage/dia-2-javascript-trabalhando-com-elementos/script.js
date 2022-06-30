const where = document.getElementById('elementoOndeVoceEsta');
const firstSonOfSon = document.getElementById('primeiroFilhoDoFilho');
const father = document.getElementById('pai');

where.parentNode.style.color = 'Blue';
firstSonOfSon.innerText = 'Aula complicada a frente';
father.firstElementChild;
where.previousElementSibling;
where.nextSibling;
where.nextElementSibling;
father.lastElementChild.previousElementSibling;


const createSection = document.createElement('section');
const createDiv = document.createElement('div');
const paragraph = document.createElement('p');
paragraph.className = 'paragraph';

father.append(createSection);
where.append(createDiv);
firstSonOfSon.appendChild(paragraph);

const SonsSonsFirstSon = document.getElementsByClassName('paragraph');

SonsSonsFirstSon[0].parentElement.parentElement.nextElementSibling;



// Acesse o elemento elementoOndeVoceEsta. - OK
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. - OK
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? -OK
// Acesse o primeiroFilho a partir de pai. -OK
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. -OK
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. - OK
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. -OK
// Agora acesse o terceiroFilho a partir de pai.  -OK
// Crie um irmão para elementoOndeVoceEsta. -OK
// Crie um filho para elementoOndeVoceEsta. -OK
// Crie um filho para primeiroFilhoDoFilho. -OK
// A partir desse filho criado, acesse terceiroFilho. -OK


// parentNode: retorna o nó pai.
// parentElement: retorna o elemento pai.
// childNodes: retorna um NodeList com todos os nós filhos.
// children: retorna um HTMLCollection com todos os elementos filhos.
// firstChild: retorna o primeiro nó filho.
// firstElementChild: retorna o primeiro elemento filho.
// lastChild: retorna o último nó filho.
// lastElementChild: retorna o último elemento filho.
// nextSibling: retorna o próximo nó.
// nextElementSibling: retorna o próximo elemento.
// previousSibling: retorna o nó anterior.
// previousElementSibling: retorna o elemento anterior.