function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => {
      renderBooks(data);
    })
    .catch((error) => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear any existing content

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name; // Adjust if the property name is different
    bookList.appendChild(li);
  });
}

// Call fetchBooks when the script loads
fetchBooks();
