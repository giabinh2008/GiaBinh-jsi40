// function toggleAnswer(element) {
//   const answer = element.nextElementSibling;
//   const isVisible = answer.style.display === "block";

//   // Hide all answers first
//   document.querySelectorAll(".faq-item .answer").forEach(p => {
//     p.style.display = "none";
//   });

//   // Show clicked one if it wasn't already visible
//   if (!isVisible) {
//     answer.style.display = "block";
//   }
// }
 function toggleAnswer(header) {
      const answer = header.nextElementSibling;

      // Ẩn tất cả các câu trả lời khác
      document.querySelectorAll('.answer').forEach(p => {
        if (p !== answer) {
          p.classList.remove('show');
        }
      });

      // Toggle câu trả lời này
      answer.classList.toggle('show');
    }
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