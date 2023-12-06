console.log("script working");

//book class
class Book {
  constructor(title, author, pages, read) {
    this.title = title ?? "generic book";
    this.author = author ?? "generic author";
    this.pages = pages ?? 0;
    this.read = read ?? false;
  }

  info() {
    console.log(
      this.title + "," + this.author + "," + this.pages + "," + this.read + "."
    );
  }
  toggleRead() {
    this.read = !this.read;
  }
}

const firstBook = new Book("Il signore", "asdsad", "333", false);

let myLibrary = [];

//add to array
function appendBookToLibrary(book) {
  myLibrary.push(book ?? new Book());
}

//--ended--book--section--//

const domLibrary = document.querySelector(".library");
const addBtn = document.getElementById("addBtn");
const addBookBtn = document.getElementById("addBook");
const modal = document.querySelector("[data-modal]");
const form = document.querySelector("form");

function createDiv(input, ...args) {
  const div = document.createElement("div");
  div.textContent = input;

  for (let i = 0; i < args.length; i++) {
    div.classList.add(args[i]);
  }

  return div;
}

function createCard(book) {
  const card = document.createElement("div");
  card.className = "card";
  let currentTitle = book.title;

  card.appendChild(createDiv(book.title, "card-item"));
  card.appendChild(createDiv(book.author, "card-item"));
  card.appendChild(createDiv(book.pages, "card-item"));
  card
    .appendChild(
      createDiv(
        book.read ? "READ" : "NOT READ",
        "card-item",
        "box",
        book.read ? "box" : "red-box"
      )
    )
    .addEventListener("click", (e) => {
      book.toggleRead();
      e.target.textContent = book.read ? "READ" : "NOT READ";
      e.target.classList.toggle("red-box");
    });
  card
    .appendChild(createDiv("REMOVE", "card-item", "remove-box"))
    .addEventListener("click", (e) => {
      console.log(e.target.parentElement);
      domLibrary.removeChild(e.target.parentElement);
      myLibrary = myLibrary.filter((book) => book.title !== currentTitle);
    });

  return card;
}

//draw all books inside the library array onto the page
function drawAllBooksOnPage() {
  myLibrary.forEach((book, index) => {
    domLibrary.appendChild(createCard(book));
  });
}

addBtn.addEventListener("click", (e) => {
  //apro sezione per chiedere dati ad utente
  form.reset();
  modal.showModal();
});

addBookBtn.addEventListener("click", (e) => {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const hasBeenReadInput = document.getElementById("hasBeenRead");

  if (titleInput.checkValidity() && authorInput.checkValidity() && pagesInput.checkValidity() && hasBeenReadInput.checkValidity()) {
    console.log("INPUT VALIDI");
    //addBook()
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      hasBeenReadInput.checked
    );
    modal.close("");
    appendBookToPage(newBook);
    appendBookToLibrary(newBook);
  } else {
    e.preventDefault();
    alert("INPUT NON VALIDI");
    return;
  }
});

function appendBookToPage(book) {
  domLibrary.appendChild(createCard(book));
}
