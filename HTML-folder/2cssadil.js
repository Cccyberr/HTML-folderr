
    var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var pointers = document.getElementsByClassName("pointer");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    pointers[i].className = pointers[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides
