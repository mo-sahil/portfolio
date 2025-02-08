// preloader
window.addEventListener("load", () => {
  hidePreloader();
});

function hidePreloader() {
  setTimeout(function () {
    $(".preloader").addClass("d-none");
    $(".main-content").removeClass("d-none");
  }, 2500);
}

// navbar
var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector(".navbar");
var navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("shadow-lg");
});

// close nav-links on click
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    $(".navbar-collapse").removeClass("show");
  });
});

$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $(".counter").html(scrollTop);
    if (scrollTop >= 50) {
      $(".navbar").addClass("shadow-lg");
      $(".navbar").addClass("navbar-scrolled");
      $(".navbar").removeClass("navbar-unscrolled");
    } else if (scrollTop < 50) {
      $(".navbar").addClass("navbar-unscrolled");
      $(".navbar").removeClass("shadow-lg");
      $(".navbar").removeClass("navbar-scrolled");
    }
  });
});

// toast
const toastLive = document.getElementById("toast");
$("#form").submit(function () {
  const toast = new bootstrap.Toast(toastLive);

  //emailJS
  var params = {
    userName: document.getElementById("user_name").value,
    userEmail: document.getElementById("user_email").value,
    userMessage: document.getElementById("user_message").value,
  };

  const serviceID = "";
  const templateID = "";

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("user_name").value = "";
    document.getElementById("user_email").value = "";
    document.getElementById("user_message").value = "";
  });

  toast.show();
  return false;
});
