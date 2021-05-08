const header = document.querySelector(".header");

if (header) {
  const openButton = header.querySelector(".header__burger");
  const closeButton = header.querySelector(".header__nav-btn");
  const navWrapper = header.querySelector(".header__nav-wrap");
  const body = document.querySelector("body");
  const anchors = document.querySelectorAll("a");

  const onWindowClick = (evt) => {
    if (
      !evt.target.matches(
        ".header__burger, .header__burger *, .header__nav-wrap, .header__nav-wrap *"
      )
    ) {
      body.classList.remove("no-scroll");
      navWrapper.classList.remove("header__nav-wrap_opened");
    }
  };

  openButton.addEventListener("click", () => {
    navWrapper.classList.add("header__nav-wrap_opened");
    body.classList.add("no-scroll");
    document.addEventListener("click", onWindowClick);
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    navWrapper.classList.remove("header__nav-wrap_opened");
    body.classList.remove("no-scroll");
    document.addEventListener("click", onWindowClick);
  });

  anchors.forEach((anchor) =>
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      var href = anchor.getAttribute("href");
      var elem =
        document.querySelector(href) ||
        document.querySelector(
          "a[name=" + href.substring(1, href.length) + "]"
        );

      window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    })
  );
}
