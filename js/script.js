$(document).ready(function () {
  $(".burger").on("click", function () {
    $(".mob-nav").removeClass("hidden");
    $(".overlay").removeClass("hidden");
  });
});

$(document).ready(function () {
  $(".overlay").on("click", function () {
    $(".mob-nav").addClass("hidden");
    $(".overlay").addClass("hidden");
  });
});

// const overlay = document.querySelector(".overlay");
// const modal = document.querySelector(".burger");

// const closeModal = function () {
//   overlay.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// overlay.addEventListener("click", closeModal);
