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

const caste = document.getElementById('library');

function displayBooksOnPage(){
    domLibrary.appendChild(createDiv('card','topolino'));
}

function createDiv(...args){
    const div = document.createElement('div');

    for(let i = 0; i < args.length; i++){
        div.classList.add(args[i]);
    }

    return div;
}