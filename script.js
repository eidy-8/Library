var myLibrary = [];
var id = "";
var holding = 0; //variable to create different id names
let isOn = false; 

function book(title, author, pages, read) {
    this.title  = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function toggleState(){
    isOn = !isOn;
      const button = document.getElementById('toggleButton');

      if (isOn) {
        button.textContent = 'Read';
        button.classList.remove('off');
        button.classList.add('on');
      } else {
        button.textContent = 'Not Read';
        button.classList.remove('on');
        button.classList.add('off');
    }
}

book.prototype.toggleState = toggleState;

function displayBooks() {
    differId();

    var newDiv = document.createElement('div');
    newDiv.id = `${id}`;
    var outputText = "";

    for (var i = 0; i < myLibrary.length; i++) {
        if (i == 2) {
            outputText += "Pages: ";
        } 
        outputText += myLibrary[i] + '\n\n';
    }

    console.log(outputText);
    document.getElementById('myArticle').appendChild(newDiv);
    document.getElementById(`${id}`).innerText = outputText;

    var button = document.createElement("button");
    button.innerText = "Remove";

    var currentId = id;
    button.addEventListener("click", function() {
        var divToRemove = document.getElementById(`${currentId}`);
        divToRemove.parentNode.removeChild(divToRemove);
    });
    newDiv.appendChild(button);

    //toggle button code
    var button = document.createElement("button");
    button.id = "toggleButton";

    var currentId = id;
    button.addEventListener("click", function(){
        toggleState();
    });
    newDiv.appendChild(button);

    console.log(myLibrary[3]);
    if (myLibrary[3] == "yes") {
        button.textContent = 'Read';
        button.classList.remove('off');
        button.classList.add('on');
    } else {
        button.textContent = 'Not Read';
        button.classList.remove('on');
        button.classList.add('off');
    }

    myLibrary = [];
}


function differId() {
    id = holding + 1;
    holding = id;
    return id;
}

function submitForm() {
    var formData = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      pages: document.getElementById('pages').value,
      read: document.querySelector('input[name="read"]:checked').value,
    };
    myLibrary.push(formData.title);
    myLibrary.push(formData.author);
    myLibrary.push(formData.pages);
    myLibrary.push(formData.read);

    displayBooks();
}

const openDialogButton = document.getElementById('openDialogButton');
const closePopup = document.getElementById('closePopup');
openDialogButton.addEventListener('click', () => {
    popup.showModal();
});
closePopup.addEventListener('click', (event) => {
    event.preventDefault();
    popup.close();
});


