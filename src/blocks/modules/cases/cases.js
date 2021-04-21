const cases = document.querySelector(".cases");

if (cases) {
  const label = cases.querySelectorAll(".cases__subtitle");

  label.forEach((label) =>
    label.addEventListener("click", () => {
      label.classList.toggle("cases__subtitle_opened");
    })
  );
}
