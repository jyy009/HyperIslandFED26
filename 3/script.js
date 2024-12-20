document.addEventListener("DOMContentLoaded", function () {
  //selectors
  const form = document.getElementById("form");
  const body = document.body;

  //set global styles
  const style = document.createElement("style");
  style.textContent = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0
  }
  `;

  document.documentElement.style.setProperty(
    "--main-font",
    "Montserrat, serif"
  );
  document.head.appendChild(style);

  //create page container
  const pageContainer = document.createElement("div");
  pageContainer.setAttribute("id", "page-container");

  //move form into page container
  body.appendChild(pageContainer);

  //style page container
  pageContainer.style.backgroundColor = "#f3efec";
  pageContainer.style.display = "flex";
  pageContainer.style.alignItems = "center";
  pageContainer.style.justifyContent = "center";
  pageContainer.style.height = "100vh";

  //create div for form
  const formDiv = document.createElement("div");
  formDiv.classList.toggle("form-wrapper");

  //put form in div
  pageContainer.appendChild(formDiv);
  formDiv.appendChild(form);

  //style form div
  formDiv.style.display = "flex";
  formDiv.style.flexDirection = "column";
  formDiv.style.width = "300px";

  //style labels
  const styleLabel = () => {
    const labelElement = form.querySelectorAll(".label");
    console.log(labelElement);
    labelElement.forEach((label) => {
      label.style.width = "100%";
      label.style.fontFamily = "var(--main-font)";
    });
  };

  //style form
  form.style.width = "100%";

  //style inputs
  const styleInput = () => {
    const inputElement = form.querySelectorAll(".input, .textarea, #options");
    console.log(inputElement);
    inputElement.forEach((input) => {
      input.style.width = "100%";
      input.style.padding = "5px";
      input.style.fontFamily = "var(--main-font)";
      input.style.transition = "border-color 0.3s ease, box-shadow 0.3s ease";

      input.addEventListener("focus", () => {
        input.style.borderColor = "rgba(0, 128, 0, 0.5)";
        input.style.boxShadow = "0 0 5px rgba(0, 128, 0, 0.5)";
        input.style.border = "none";
        input.style.outline = "none";
      });

      input.addEventListener("blur", () => {
        input.style.borderColor = "";
        input.style.boxShadow = "";
        input.style.border = "";
        input.style.outline = "";
      });
    });
  };

  //style button
  const submitButton = document.querySelector(".input-button");
  console.log(submitButton);
  submitButton.style.minWidth = "50%";
  submitButton.style.padding = "10px";
  submitButton.style.backgroundColor = "#94b4a2";
  submitButton.style.border = "none";
  submitButton.style.borderRadius = "5px";
  submitButton.style.color = "white";

  styleLabel();
  styleInput();
});
