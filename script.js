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

//draw all books inside the library array onto the page 
function displayBooksOnPage(){
    myLibrary.forEach((book,index) => {
        domLibrary.appendChild(createCard(book));
    });
}

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
    
    card.appendChild(createDiv(Object.values(book).at(0),['card-item']));
    card.appendChild(createDiv(Object.values(book).at(1),['card-item']));
    card.appendChild(createDiv(Object.values(book).at(2),['card-item']));
    card.appendChild(createDiv(Object.values(book).at(3),['card-item']));
    card.appendChild(createDiv('REMOVE',['card-item']));
    return card;
}

//object.values(mylibrary[0])
//Object.values(myLibrary[0]).at(0);
//Object.values(book).at(0);