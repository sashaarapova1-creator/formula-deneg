const form = document.querySelector("#payment-form");
const note = document.querySelector("#form-note");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim().split(" ")[0] || "Спасибо";

  note.textContent = `${name}, заявка готова. Подключите платежную ссылку в script.js, и после формы пользователь будет переходить к оплате.`;
  form.reset();
});
