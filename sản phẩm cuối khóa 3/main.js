document.querySelector('.accessibility-btn').addEventListener('click', () => {
  alert('Accessibility options will be added soon!');
});
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    header.classList.toggle('active');
    body.classList.toggle('open');
  });
});
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

  // Tin tức
  const API_KEY = '304d1607b8fe4258bb9ea1d8b5bdcca9'; // <- Thay bằng key của bạn
const NEWS_CONTAINER = document.getElementById("news-container");

async function fetchKielNews() {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=kiel%20university&language=en&pageSize=6&apiKey=${API_KEY}`);
    const data = await res.json();
    NEWS_CONTAINER.innerHTML = "";

    if (!data.articles.length) {
      NEWS_CONTAINER.innerHTML = "<p>Không tìm thấy tin tức nào.</p>";
      return;
    }

    data.articles.forEach(article => {
      const div = document.createElement("div");
      div.className = "news-card";
      div.innerHTML = `
        <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description || 'Không có mô tả.'}</p>
        <a href="${article.url}" target="_blank">Xem thêm</a>
      `;
      NEWS_CONTAINER.appendChild(div);
    });
  } catch (err) {
    NEWS_CONTAINER.innerHTML = "<p>Lỗi khi tải tin tức.</p>";
    console.error(err);
  }
}

document.getElementById("chat-launcher").addEventListener("click", () => {
    window.location.href = "./chatbot.html"; // thay bằng link chatbot của bạn
  });