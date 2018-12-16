var feedback_link = document.querySelector(".contact-us");
var feedback_popup = document.querySelector(".modal-feedback");
var feedback_close = feedback_popup.querySelector(".modal-close");

var map_link = document.querySelector(".image-map");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".modal-close")




feedback_link.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback_popup.classList.add("modal-show");

});

feedback_close.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback_popup.classList.remove("modal-show");
});
document.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback_popup.classList.contains("modal-show")){
    feedback_popup.classList.remove("modal-show");
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

