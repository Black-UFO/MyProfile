jQuery(document).ready((e) => {
  let socialbtn = document.querySelector(".socialBtn");
  let socialModal = document.querySelector(".socialModal");
  let header = document.querySelector("header");
  let sticky = header.offsetTop;
  let menuBox = jQuery(".menu");
  let menuBtn = jQuery("#changeModeBtn");

  socialbtn.addEventListener("click", function (e) {
    e.preventDefault();

    socialModal.classList.toggle("hideModal");
    socialbtn.classList.toggle("turnOn");
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
      header.classList.add("stickybar");
    } else {
      header.classList.remove("stickybar");
    }
  });

  let body = jQuery(".container");

  if (
    localStorage.getItem("theme") == "light" ||
    localStorage.getItem("theme") == "" ||
    localStorage.getItem("theme") == null
  ) {
    localStorage.setItem("theme", "light");
    body.addClass("light");
    menuBtn.addClass("fa-sun");
    menuBtn.removeClass("fa-moon");
    menuBox.addClass("moon");
    menuBox.removeClass("sun");
    body.removeClass("night");
  } else {
    body.addClass("night");
    menuBtn.addClass("fa-moon");
    menuBtn.removeClass("fa-sun");
    menuBox.addClass("sun");
    menuBox.removeClass("moon");
    body.removeClass("light");
  }

  jQuery(".changeMode").click((e) => {
    e.preventDefault();

    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "night");
      body.addClass("night");
      menuBtn.addClass("fa-moon");
      menuBtn.removeClass("fa-sun");
      menuBox.addClass("sun");
      menuBox.removeClass("moon");
      body.removeClass("light");
    } else {
      localStorage.setItem("theme", "light");
      body.addClass("light");
      menuBtn.removeClass("fa-moon");
      menuBtn.addClass("fa-sun");
      menuBox.removeClass("sun");
      menuBox.addClass("moon");
      body.removeClass("night");
    }
  });
});
