const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const bookList = document.getElementById("bookList");

async function fetchBooks(query) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await res.json();

    bookList.innerHTML = "";

    if (data.items) {
        data.items.forEach(book => {
            const title = book.volumeInfo.title || "Không có tiêu đề";
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Không rõ tác giả";
            const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150";
            
            const bookEl = document.createElement("div");
            bookEl.classList.add("book");
            bookEl.innerHTML = `
                <img src="${thumbnail}" alt="${title}">
                <h3>${title}</h3>
                <p>${authors}</p>
            `;
            bookList.appendChild(bookEl);
        });
    } else {
        bookList.innerHTML = "<p>Không tìm thấy sách nào.</p>";
    }
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchBooks(query);
    }
});

// Tự động load sách ban đầu
fetchBooks("JavaScript");

// dropdown inter 




  const btn = document.getElementById("international-btn");
  const dropdownItem = btn.closest(".dropdown");
  const dropdownMenu = document.getElementById("international-dropdown");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdownItem.classList.toggle("open");
  });

  document.addEventListener("click", function () {
    dropdownItem.classList.remove("open");
  });