
const buttons = document.querySelectorAll('button');

buttons.forEach((button => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
}));

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function() { 
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`);
}

function addBookToLibrary() {
    
}