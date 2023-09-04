console.log('script working');

//book object constructor
function Book(title,author,pages,read){
    this.title = title ?? 'generic book';
    this.author = author ?? 'generic author';
    this.pages = pages ?? 0;
    this.read = read ?? false;
}

Book.prototype.info = function(){
    console.log(this.title +","+ this.author +","+ this.pages +","+ this.read+".");
}

const firstBook = new Book("Il signore","asdsad","333",false);

const myLibrary = [];

//add to array
function appendBookToLibrary(book){
    myLibrary.push(book ?? new Book());
}

//--ended--book--section--//

const domLibrary = document.querySelector('.library');
const addBtn = document.getElementById('addBtn');
const addBookBtn = document.getElementById('addBook');
const modal = document.querySelector('[data-modal]');
const form = document.querySelector('form');

function createDiv(input, ...args){
    const div = document.createElement('div');
    div.textContent = input;

    for(let i = 0; i < args.length; i++){
        div.classList.add(args[i]);
    }

    return div;
}

function createCard(book){
    const card = document.createElement('div');
    card.className = 'card';

    for(let i = 0; i < Object.values(book).length;i++){
        card.appendChild(createDiv(Object.values(book).at(i),['card-item']));
    }
    card.querySelector('div:nth-child(4)').classList.add('box');
    card.appendChild(createDiv('REMOVE','card-item','remove-box'));
    return card;
}

//draw all books inside the library array onto the page 
function drawAllBooksOnPage(){
    myLibrary.forEach((book,index) => {
        domLibrary.appendChild(createCard(book));
    });
}

addBtn.addEventListener('click',(e) => {
    //apro sezione per chiedere dati ad utente
    form.reset();
    modal.showModal();
});

addBookBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    const titleInput = document.getElementById('title').value;
    const authorInput = document.getElementById('author').value;
    const pagesInput = document.getElementById('pages').value;
    const hasBeenReadInput = document.getElementById('hasBeenRead').value;

    const newBook = new Book(titleInput,authorInput,pagesInput,(hasBeenReadInput ? 'READ' : 'NOT READ'));
    modal.close('');
    appendBookToPage(newBook);
})

function appendBookToPage(book){
    domLibrary.appendChild(createCard(book));
}

/* 
    //creo nuovo libro con dati utente
    const newBook = new Book();
    //inserisco libro all'interno dell'array
    appendBookToLibrary(newBook);
    //chiudo sezione per chiedere dati ad utente

    //l'aggiunta di un elemento all'array trigghera un append grafico dell'ultimo libro.
    appendBookToPage(newBook);
*/