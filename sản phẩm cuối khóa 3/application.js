document.getElementById('applicationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    fullname: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    program: document.getElementById('program').value,
    dob: document.getElementById('dob').value,
    nationality: document.getElementById('nationality').value
  };

  localStorage.setItem('kielApplication', JSON.stringify(formData));

  const output = document.getElementById('output');
  output.textContent = JSON.stringify(formData, null, 2);

  document.getElementById('submittedData').style.display = 'block';
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