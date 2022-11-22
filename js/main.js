// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Create Array Of Imgs
let imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// create varuable to controle intervel
let backgrounddOption = true;
let intervelControler;
//create function to change backgroumd
function randomizeImg() {
  if (backgrounddOption === true) {
    intervelControler = // Change Backgraund Img
      setInterval(() => {
        //Gnarete Random Number
        let random = Math.floor(Math.random() * imgsArr.length);
        //Change To The Curent Img
        landingPage.style.backgroundImage = `url("imgs/${imgsArr[random]}")`;
      }, 3000);
  }
}
randomizeImg();
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
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === main_color) {
      element.classList.add("active");
    }
  });
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
// start random-backcround

//switch random background
let randomeBackEle = document.querySelectorAll(".random-backgrounds span");
// remove all active classes
randomeBackEle.forEach((span) => {
  span.addEventListener("click", (e) => {
    //remove all active classes
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");

    // control of chnge images
    if (e.target.dataset.background === "yes") {
      backgrounddOption === true;
      randomizeImg();
    } else {
      backgrounddOption === false;
      clearInterval(intervelControler);
    }
  });
});

// end random-backcround
