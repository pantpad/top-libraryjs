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

let myLibrary = [];

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
    let currentTitle = '';
    for(let i = 0; i < Object.values(book).length;i++){
        if(i==0){
            card.appendChild(createDiv(Object.values(book).at(i),'card-item','title'));
            currentTitle = Object.values(book).at(0);
        }else{
            card.appendChild(createDiv(Object.values(book).at(i),'card-item'));
        }
    }

    card.querySelector('div:nth-child(4)').classList.add('box');
    card.appendChild(createDiv('REMOVE','card-item','remove-box')).addEventListener('click',(e) => {
        console.log(e.target.parentElement);
        domLibrary.removeChild(e.target.parentElement);
        myLibrary = myLibrary.filter((book) => book.title !== currentTitle);
    });

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
    appendBookToLibrary(newBook);
})

function appendBookToPage(book){
    domLibrary.appendChild(createCard(book));
}