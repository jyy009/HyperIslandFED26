const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.stopPropagation();
    alert(`${event.target.textContent} clicked`);
  } else {
    alert("Child container clicked!");
  }
});

const button1 = document.getElementById("button1");
button1.addEventListener("click", (e) => {
  e.stopPropagation();
});

const button2 = document.getElementById("button2");
button2.onclick = (event) => {
  event.stopPropagation();
  alert(`${event.target.textContent} clicked`);
};

const button3 = document.getElementById("button3");
button3.addEventListener("click", (event) => {
  event.stopPropagation();
  alert(`${event.target.textContent} clicked`);
});
