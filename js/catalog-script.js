var basket_link = document.querySelector(".catalog-list");
var basket_popup = document.querySelector(".modal-add-basket");
var basket_close = basket_popup.querySelector(".modal-close");


basket_link.addEventListener("click", function(evt){

  if(evt.target.classList.contains("buy")){ basket_popup.classList.add("modal-show")}

});
basket_popup.addEventListener("click", function(evt){
  if(evt.target.classList.contains("continue-shopping")){
    evt.preventDefault();
    basket_popup.classList.remove("modal-show");
  }

})

basket_close.addEventListener("click", function(evt){
  evt.preventDefault();
  basket_popup.classList.remove("modal-show");
});

document.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basket_popup.classList.contains("modal-show")){
      basket_popup.classList.remove("modal-show");
    }
  }
});
