const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("Level 0 event handler");
};

const button3 = document.getElementById("button3");

button3.addEventListener("click", () => {
  alert("Level 2 event handler");
});

buttonChildContainer.addEventListener("click", (event) => {
  console.log("Event delegation on:", event.target.textContent);
});
