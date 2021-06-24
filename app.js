var collapseButtons = document.getElementsByClassName("collapsible");
var i;

for (i= 0; i < collapseButtons.length; i++) {
  collapseButtons[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    var plus = this.getElementsByClassName("plus")[0];
    var minus = this.getElementsByClassName("minus")[0];
    if (content.style.display === "flex") {
      content.style.display = "none";
      plus.style.display = "inline-block";
      minus.style.display = "none";
    } else {
      content.style.display = "flex";
      minus.style.display = "inline-block";
      plus.style.display = "none";
    }
  });
}
