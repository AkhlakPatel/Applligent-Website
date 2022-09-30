// ================== Service Page Script ==================

// Add active class to the current button (highlight it)
// var headerApp = document.getElementById("app_development_section_div");
// var appBtns = document.getElementsByClassName("app_btn");
// for (let i = 0; i < appBtns.length; i++) {
//   appBtns[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("app_btn active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// Add active class to the current button (highlight it)
var headerWeb = document.getElementById("web_development_section_div");
var webBtns = document.getElementsByClassName("web_btn");
for (let i = 0; i < webBtns.length; i++) {
  webBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("web_btn active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ============================ Creation Page Script ==========================
function changeTab(evt, Category) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Category).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Cursor Script Start

var cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  cursor.style.display = "block";

  // Cursor Effect on mouse Stopped
  function mouseStopped() {
    cursor.style.display = "none";
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

// Cursor Effect on mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// Cursor Script End

// Validation Contact Form Start

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let name = id("name"),
  email = id("email"),
  number = id("number"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(name, 0, "Please enter name");
  engine(email, 1, "Please enter email");
  engine(number, 2, "Please enter phone number");
});

let engine = (id, serial, message) => {
  var filter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else if (id == name && id.value.length < 3) {
    errorMsg[serial].innerHTML = "Minimum length of name should be 3";
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else if (id == email) {
    if (id.value.match(filter)) {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    } else {
      errorMsg[serial].innerHTML = "Please enter valid email";
      id.style.border = "2px solid red";
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    }
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

// Validation Contact Form End
