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

function appendBookToLibrary(book){
    myLibrary.push(book ?? new Book());
}

const domLibrary = document.querySelector('.library');

function displayBooksOnPage(){
    domLibrary.appendChild(createCard());
}

function createDiv(input, ...args){
    const div = document.createElement('div');
    div.textContent = input;

    for(let i = 0; i < args.length; i++){
        div.classList.add(args[i]);
    }

    return div;
}

function createCard(){
    const card = document.createElement('div');
    card.className = 'card';
    card.appendChild(createDiv('ciaooo',['child']));
    card.appendChild(createDiv('ciaooo',['child']));
    card.appendChild(createDiv('ciaooo',['child']));
    card.appendChild(createDiv('ciaooo',['child']));
    card.appendChild(createDiv('ciaooo',['child']));
    return card;
}