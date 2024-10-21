const container = document.querySelector(".container");

function updateBox() {
  const width = document.getElementById("input1").value;
  const height = document.getElementById("input2").value;
  const borderRadius = document.getElementById("input3").value;

  if (width) {
    container.style.width = width + "px";
  } else if (height) {
    container.style.height = height + "px";
  } else if (borderRadius) {
    container.style.borderRadius = borderRadius + "px";
  } else {
    alert("Iltimos qiymatlardan birini kiriting!!!");
  }
}
