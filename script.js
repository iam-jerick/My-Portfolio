let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

document.querySelectorAll("#menuList li a").forEach((item) => {
  item.addEventListener("click", function () {
    menuList.style.maxHeight = "0px";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-section");

  function onScroll() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight - 100) {
      // Adjust this value to control when the animation triggers
      aboutSection.classList.add("visible");
      window.removeEventListener("scroll", onScroll); // Remove event listener once animation is triggered
    }
  }

  window.addEventListener("scroll", onScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const educationSection = document.querySelector(".education");
  const cards = document.querySelectorAll(".education .card");

  function onScroll() {
    const sectionTop = educationSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight - 100) {
      // Adjust this value to control when the animation triggers
      educationSection.classList.add("visible");
      window.removeEventListener("scroll", onScroll); // Remove event listener once animation is triggered
    }
  }

  window.addEventListener("scroll", onScroll);

  // Smooth scroll
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust this value to align correctly
        behavior: "smooth",
      });
    });
  });
});
