document.addEventListener("DOMContentLoaded", () => { GETJson(); });

// TODO: Create a function to add books
function addBook(book) {

    var url = "https://611ade7d22020a00175a42dd.mockapi.io/Books";
    event.preventDefault();

    const bookData = {
        title: book.title.value,
        subtitle: book.subtitle.value,
        author: book.author.value,
        image: book.image.value
    };

    POSTJson(url, bookData);
    document.getElementById("addBookForm").reset();
    setTimeout(function () { GETJson(); }, 500);
}

// TODO: Create a function to view all books
function listBook(books) {

    const tableBody = document.getElementById('tableBoody');

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    for (var i = 0; i < books.length; i++) {
        var row = `<tr>     
                            <td>${i + 1}</td>
							<td>${books[i].title}</td>
							<td>${books[i].subtitle}</td>
							<td>${books[i].author}</td>
                            <td>${books[i].image}</td>
                            <td><button onclick="deleteBook(${books[i].id})" class="btn btn-danger">Delete</button></td>
					  </tr>`

        tableBody.innerHTML += row;
    }
}

// TODO: Create a function to delete a book
function deleteBook(id) {
    const url = "https://611ade7d22020a00175a42dd.mockapi.io/Books/";
    DELETEJson(url, id);
    setTimeout(function () { GETJson(); }, 500);
}



function GETJson() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://611ade7d22020a00175a42dd.mockapi.io/Books');
    xhr.onload = function () {
        if (this.status === 200) {
            try {
                const jsonObject = JSON.parse(this.responseText);
                listBook(jsonObject);
            } catch (e) {
                console.warn("Error: JSON File");
            }
        } else {
            console.warn("Error: Wrong Call");
        }
    }
    xhr.send();
}

function DELETEJson(url, id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url + id, true);
    xhr.send();
}

function POSTJson(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}