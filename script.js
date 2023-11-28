var myLibrary = [];
var id = "";
var holding = 0;
const popup = document.getElementById('popup');

//code for popup box
const openDialogButton = document.getElementById('openDialogButton');
const closePopup = document.getElementById('closePopup');
openDialogButton.addEventListener('click', () => {
    popup.showModal();
});
closePopup.addEventListener('click', (event) => {
    event.preventDefault();
    popup.close();
});

function submitForm() { //push each book's object into the myLibrary array
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

function displayBooks() {
    differId();

    var newDiv = document.createElement('div');
    newDiv.id = `${id}`;
    var outputText = "";

    for (var i = 0; i < myLibrary.length; i++) { //generate the string to be displayed on the book div
        if (i == 2) {
            outputText += "Pages: ";
        } 
        outputText += myLibrary[i] + '\n\n';
    }

    document.getElementById('myArticle').appendChild(newDiv);
    document.getElementById(`${id}`).innerText = outputText;

    var button = document.createElement("button");
    button.innerText = "Remove";

    var currentId = id; //store current id so the remove button is linked to the actual ID
    button.addEventListener("click", function() {
        var divToRemove = document.getElementById(`${currentId}`);
        divToRemove.parentNode.removeChild(divToRemove);
    });
    newDiv.appendChild(button);

    //code for toggle button
    var toggleButton = document.createElement("button");
    toggleButton.addEventListener("click", function(){
        toggleReadStatus(newDiv, toggleButton);
    });

    if (myLibrary[3] == "yes") { //if the read value is yes then the button display as read
        toggleButton.textContent = 'Read';
        toggleButton.classList.remove('off');
        toggleButton.classList.add('on');
    } else {
        toggleButton.textContent = 'Not Read';
        toggleButton.classList.remove('on');
        toggleButton.classList.add('off');
    }

    newDiv.appendChild(toggleButton);

    myLibrary = [];
}

function differId() { //generate new id numbers to distinguish the divs created
    id = holding + 1;
    holding = id;
    return id;
}

function toggleReadStatus(div, button) {
    if (button.textContent === 'Read') {
        button.textContent = 'Not Read';
        button.classList.remove('on');
        button.classList.add('off');
    } else {
        button.textContent = 'Read';
        button.classList.remove('off');
        button.classList.add('on');
    }
}

