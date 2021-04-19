const forWho = document.querySelector(".for-who");

if (forWho) {
  if (window.matchMedia("(max-width: 600px)").matches) {
    const title = forWho.querySelectorAll(".for-who__subtitle");

    title.forEach((title) =>
      title.addEventListener("click", () => {
        title.classList.toggle("for-who__subtitle_opened");
      })
    );
  }
}
