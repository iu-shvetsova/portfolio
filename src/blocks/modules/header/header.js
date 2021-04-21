const header = document.querySelector(".header");

if (header) {
  const openButton = header.querySelector(".header__burger");
  const closeButton = header.querySelector(".header__nav-btn");
  const navWrapper = header.querySelector(".header__nav-wrap");

  const onWindowClick = (evt) => {
    if (
      !evt.target.matches(
        ".header__burger, .header__burger *, .header__nav-wrap, .header__nav-wrap *"
      )
    ) {
      navWrapper.classList.remove("header__nav-wrap_opened");
    }
  };

  openButton.addEventListener("click", () => {
    navWrapper.classList.add("header__nav-wrap_opened");
    document.addEventListener("click", onWindowClick);
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    navWrapper.classList.remove("header__nav-wrap_opened");
    document.addEventListener("click", onWindowClick);
  });
}
