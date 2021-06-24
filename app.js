var collapseButtons = document.getElementsByClassName("collapsible");
var i;

for (i= 0; i < collapseButtons.length; i++) {
  collapseButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}