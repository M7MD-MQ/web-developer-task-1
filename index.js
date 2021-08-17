// TODO: Create a function to add books
function addBook(book) {
    event.preventDefault()

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


// TODO: Create a function to delete a book

