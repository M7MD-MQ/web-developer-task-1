
document.addEventListener("DOMContentLoaded", () => { getBooksJson(); });

// TODO: Create a function to add books
function addBook(book) {
    event.preventDefault();

    const bookData = {
        title: book.title.value,
        subtitle: book.subtitle.value,
        author: book.author.value,
        image: book.image.value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://611ade7d22020a00175a42dd.mockapi.io/Books");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(bookData));


}

// TODO: Create a function to view all books
function getBooksJson() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://611ade7d22020a00175a42dd.mockapi.io/Books');
    xhr.onload = function () {
        if (this.status === 200) {
            try {
                const jsonObject = JSON.parse(this.responseText);
                viewBooks(jsonObject);
            } catch (e) {
                console.warn("Error: JSON File");
            }
        } else {
            console.warn("Error: Wrong Call");
        }
    }
    xhr.send();
}

function viewBooks(json) {
    const tableBody = document.getElementById('tableBoody');
    for (var i = 0; i < json.length; i++) {
        var row = `<tr>     
                            <td>${i}</td>
							<td>${json[i].title}</td>
							<td>${json[i].subtitle}</td>
							<td>${json[i].author}</td>
                            <td>${json[i].image}</td>
                            <td><button onclick="deleteBook()" class="btn btn-danger">Delete</button></td>
					  </tr>`
        
        tableBody.innerHTML += row;
    }
}

// TODO: Create a function to delete a book
function deleteBook() {

}
