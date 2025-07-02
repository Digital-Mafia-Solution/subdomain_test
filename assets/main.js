const square = document.getElementsByClassName("square")[0];
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  if (square.classList.contains("red")) {
    square.classList.remove("red");
    square.classList.add("blue");
  } else if (square.classList.contains("blue")) {
    square.classList.remove("blue");
    square.classList.add("red");
  }
})
