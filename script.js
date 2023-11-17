var myLibrary = [];
var id = "";
var holding = 0;

function book(title, author, pages, read) {
    this.title  = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    title = prompt("Please enter the book's name:");
    author = prompt("Please enter the author's name:");
    pages = prompt("Please enter the page's quantity:");
    read = prompt("Have you ever read this book?");
    myLibrary.push(title);
    myLibrary.push(author);
    myLibrary.push(pages);
    myLibrary.push(read);
    displayBooks();
}


function displayBooks() {
    differentId();

    var newDiv = document.createElement('div');
    newDiv.id = `${id}`;
    document.getElementById('myArticle').appendChild(newDiv);
    var outputText = "";

    for (var i = 0; i < myLibrary.length; i++) {
        outputText += myLibrary[i] + '\n';
    }

    document.getElementById(`${id}`).innerText = outputText;
    myLibrary = [];
}

function differentId() {
    id = holding + 1;
    holding = id;
    return id;
}

var myButton = document.getElementById("myButton");

myButton.addEventListener('click', addBookToLibrary);


