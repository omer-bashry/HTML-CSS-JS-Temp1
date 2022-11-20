// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Create Array Of Imgs
let imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// Change Backgraund Img
setInterval(() => {
  //Gnarete Random Number
  let random = Math.floor(Math.random() * imgsArr.length);
  //Change To The Curent Img
  landingPage.style.backgroundImage = `url("imgs/${imgsArr[random]}")`;
}, 3000);

// Select toggel-box
document.querySelector(".toggel-box .fa-gear").onclick = function () {
  //Add Toggle To Icon
  this.classList.toggle("fa-spin");
  //Add Open Class to Setting Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switching Colors
let main_color = localStorage.getItem("color_option");
if (main_color !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
}
const coloelst = document.querySelectorAll(".color-list li");
coloelst.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color_option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    document
      .querySelector(`[data-color= ${window.localStorage.getItem("color")}]`)
      .classList.add("active");
  });
});
