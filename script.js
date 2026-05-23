var form = document.getElementById("myForm");
var resultBlock = document.getElementById("result");
var resultBox = document.getElementById("resultBox");
var themeBtn = document.getElementById("themeBtn");
var body = document.body;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var lastname = document.getElementById("lastname").value;
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  resultBox.innerHTML =
    "<p><strong>Фамилия:</strong> " + lastname + "</p>" +
    "<p><strong>Имя:</strong> " + firstname + "</p>" +
    "<p><strong>Электронная почта:</strong> " + email + "</p>" +
    "<p><strong>Телефон:</strong> " + phone + "</p>";

  resultBlock.classList.add("show");
});

themeBtn.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    themeBtn.textContent = "Ночной режим";
  } else {
    body.classList.add("dark");
    themeBtn.textContent = "Дневной режим";
  }
});
