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

// TODO Function that adds user input to array
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('Rhythm of War', 'Brandon Sanderson', 1232, false);
addBookToLibrary("A Wise Man's Fear",'Patrick Rothfuss',994,true);
addBookToLibrary("Chesty", "Jon T. Hoffman", 676, false);
for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
}

let library = document.getElementById('bookList');
for (let i = 0; i < myLibrary.length; i++) {
    let element = document.createElement('div');
    element.classList.add('card');
    element.innerHTML = `<strong>${myLibrary[i].title}</strong>`;
    for (let [key, value] of Object.entries(myLibrary[i])) {
        if (key === 'title') {
            continue;
        } else {
            let para = document.createElement('p');
            para.innerHTML = `${key}: ${value}`;
            element.append(para);
        }
    }
    let readButton = document.createElement('button');
    readButton.innerHTML = 'READ';
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'REMOVE';
    element.append(readButton);
    element.append(removeButton);
    library.append(element);
}

// TODO Add a button to remove a book

// TODO Add a button that changes the read value of a book