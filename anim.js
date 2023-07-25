const box = document.querySelector(".box");

// Jumping animation on click
box.addEventListener("click", () => {
  box.classList.add("jumping");
  setTimeout(() => {
    box.classList.remove("jumping");
  }, 600);
});

// Split into multiple boxes on double-click
let isMultiple = false;

box.addEventListener("dblclick", () => {
  if (isMultiple) {
    box.classList.remove("multiple");
  } else {
    box.classList.add("multiple");
  }
  isMultiple = !isMultiple;
});
