// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Create Array Of Imgs
let imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//create function to change backgroumd
function randomizeImg() {
  if (backgrounddOption === true) {
    intervelControler = // Change Backgraund Img
      setInterval(() => {
        //Gnarete Random Number
        let random = Math.floor(Math.random() * imgsArr.length);
        //Change To The Curent Img
        landingPage.style.backgroundImage = `url("imgs/${imgsArr[random]}")`;
      }, 5000);
  }
}
// create varuable to controle intervel
let backgrounddOption = true;
let intervelControler;
//backgruond local storge variable
let backcroundLocalItem = localStorage.getItem("random_option");
// check if local storge empty
if (backcroundLocalItem !== null) {
  if (backcroundLocalItem === "true") {
    backgrounddOption = true;
    console.log("true");
  } else {
    backgrounddOption = false;
    // console.log("false");
  }

  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backcroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
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
      localStorage.setItem("random_option", true);
    } else {
      backgrounddOption === false;
      clearInterval(intervelControler);
      localStorage.setItem("random_option", false);
    }
  });
});
// end random-backcround

//  inimation for my skills
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // skills offset hright
  let skillOfSetTop = ourSkills.offsetTop;
  // skills height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // window height
  let windowHeight = this.innerHeight;
  // windo scrollTop
  let windowScrollTop = this.pageYOffset;
  // reatch to section
  if (windowScrollTop > skillOfSetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-prosses span "
    );
    // debugger;
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// create gallery pupup

let galleryImgs = document.querySelectorAll(".gallery img");
galleryImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    //create overlay div
    let overlayPopup = document.createElement("div");
    overlayPopup.className = "pupupOverlay";
    document.body.appendChild(overlayPopup);
    //create img div
    let popupImgDiv = document.createElement("div");
    popupImgDiv.className = "popupImgDiv";
    // creat img heder
    if (img.alt != null) {
      let popupHead = document.createElement("h3");
      let popupHedText = document.createTextNode(img.alt);
      popupHead.appendChild(popupHedText);
      popupImgDiv.appendChild(popupHead);
    }

    // create pupup img
    let popupimg = document.createElement("img");
    popupimg.src = img.src;
    popupImgDiv.appendChild(popupimg);
    document.body.appendChild(popupImgDiv);

    //create img exit button
    let exitSpan = document.createElement("span");
    let exitSpanText = document.createTextNode("X");
    exitSpan.appendChild(exitSpanText);
    exitSpan.className = "exit-bytton";
    popupImgDiv.appendChild(exitSpan);
  });
});

// close the popup window
document.addEventListener("click", (e) => {
  if (e.target.className == "exit-bytton") {
    e.target.parentNode.remove();
    document.querySelector(".pupupOverlay").remove();
  }
});
