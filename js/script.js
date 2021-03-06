var feedback_link = document.querySelector(".contact-us");
var feedback_popup = document.querySelector(".modal-feedback");
var feedback_close = feedback_popup.querySelector(".modal-close");

var map_link = document.querySelector(".image-map");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".modal-close")

var slides = document.querySelectorAll(".slider .slide");
var currentSlide = 0;
var next = document.querySelector(".slider-button-next");
var back = document.querySelector(".slider-button-back");
var sliderPoints = document.querySelectorAll(".slider-control-item");

var form = document.querySelector(".feedback-form");
var name_field = feedback_popup.querySelector("#your-name");
var email_field = feedback_popup.querySelector("#your-email");
var text_field = feedback_popup.querySelector("#letter-text");

form.addEventListener("submit", function(evt){

  if(!name_field.value||!email_field.value||!text_field.value){
    evt.preventDefault();
    feedback_popup.classList.remove("modal-error");
    feedback_popup.offsetWidth = feedback_popup.offsetWidth;
    feedback_popup.classList.add("modal-error");
  }
})


function goToSlide(n){

  slides[currentSlide].className = 'slide';
  sliderPoints[currentSlide].className = 'slider-control-item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'active slide';
  sliderPoints[currentSlide].className = 'current-slide  slider-control-item';


}
function nextSlide() {
  goToSlide(currentSlide+1);
}
function backSlide(){
  goToSlide(currentSlide-1);
}
next.addEventListener("click", function(evt){
  evt.preventDefault();
  nextSlide();
})
back.addEventListener("click", function(evt){
  evt.preventDefault();
  backSlide();
})

feedback_link.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback_popup.classList.add("modal-show");

});

feedback_close.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback_popup.classList.remove("modal-show");
  feedback_popup.classList.remove("modal-error");
});
document.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback_popup.classList.contains("modal-show")){
      feedback_popup.classList.remove("modal-show");
      feedback_popup.classList.remove("modal-error");
    }
  }
});


map_link.addEventListener("click", function(evt){
  evt.preventDefault();
  map_popup.classList.add("modal-show");
});
map_close.addEventListener("click", function(evt){
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
});
document.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map_popup.classList.contains("modal-show")){
      map_popup.classList.remove("modal-show");
    }
  }
});


