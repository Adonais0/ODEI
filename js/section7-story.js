var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var titles = document.getElementsByClassName("ini-title");
  var contents = document.getElementsByClassName("ini-content");
  var minis = document.getElementsByClassName("mini");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      titles[i].style.display = "none";
      contents[i].style.display = "none";
      minis[i].classList.remove('mini_active');
  }
  slides[slideIndex-1].style.display = "block";
  titles[slideIndex-1].style.display = "inline-block";
  contents[slideIndex-1].style.display = "inline-block";
  minis[slideIndex-1].classList.add('mini_active');
}

function showPhoto(n) {
  var slides = document.getElementsByClassName("mySlides");
  var titles = document.getElementsByClassName("ini-title");
  var contents = document.getElementsByClassName("ini-content");
  var minis = document.getElementsByClassName("mini");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      titles[i].style.display = "none";
      contents[i].style.display = "none";
      minis[i].classList.remove('mini_active');
  }

  slides[n-1].style.display = "block";
  titles[n-1].style.display = "inline-block";
  contents[n-1].style.display = "inline-block";
  minis[n-1].classList.add('mini_active');
}
