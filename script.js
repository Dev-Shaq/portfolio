
document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("about-btn");
  const aboutPage = document.querySelector(".about-page");

  aboutBtn.addEventListener("click", () => {
    aboutPage.scrollIntoView({
      behavior: "smooth",
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const projectBtn = document.getElementById("projects-btn");
    const projectPage = document.querySelector(".projects-page");
  
    projectBtn.addEventListener("click", () => {
      projectPage.scrollIntoView({
        behavior: "smooth",
      });
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contact-btn");
    const contactPage = document.querySelector(".contact-page");
  
    contactBtn.addEventListener("click", () => {
      contactPage.scrollIntoView({
        behavior: "smooth",
      });
    });
  });