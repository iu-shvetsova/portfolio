const faq = document.querySelector(".faq");

if (faq) {
  const label = faq.querySelectorAll(".faq__question");

  label.forEach((label) =>
    label.addEventListener("click", () => {
      label.classList.toggle("faq__question_opened");
    })
  );
}
