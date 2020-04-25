const eventPopup = document.querySelector(".event-popup");
const eventPopupContainer = document.querySelector("event-popupContainer");
const eventBtns = document.querySelectorAll(".event-btn");
const eventClose = document.querySelector(".event-close");

eventBtns.forEach((eventBtn, i) => {
  eventBtn.addEventListener("click", (e) => {
    eventPopupOpen(e);
  });
});
eventClose.addEventListener("click", eventPopupClose);
function eventPopupOpen(e) {
  e.preventDefault();

  eventPopup.parentElement.classList.add("active");
}
function eventPopupClose(e) {
  e.preventDefault();
  eventPopup.parentElement.classList.remove("active");
}
