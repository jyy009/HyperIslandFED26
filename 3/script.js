document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const body = document.body;

  //create page container
  const pageContainer = document.createElement("div");
  pageContainer.setAttribute("id", "page-container");

  //move form into page container
  body.appendChild(pageContainer);
  // pageContainer.appendChild(form);

  //style page container
  pageContainer.style.display = "flex";
  pageContainer.style.alignItems = "center";
  pageContainer.style.justifyContent = "center";
  pageContainer.style.height = "100vh";

  //put form in a div
  const formDiv = document.createElement("div");
  formDiv.classList.toggle("form-wrapper");
  pageContainer.appendChild(formDiv);
  formDiv.appendChild(form);

  //style form div
  formDiv.style.display = "flex"
  formDiv.style.flexDirection = "column"
  formDiv.style.width = "300px";

  const styleLabel =() => {
    const labelElement = form.querySelectorAll(".label");
    console.log(labelElement)
    labelElement.forEach(label => {
      label.style.width = "100%"
    })
  }

  // //style form
  // form.style.display = "flex"
  // form.style.flexDirection = "column"
  form.style.width = "100%"


  //remove line breaks in form
  // let formContent = document.body.innerHTML;
  // formContent = formContent.replace(/<br\s*[\/]?>/gi, "");


  const styleInput = () => {
    const inputElement = form.querySelectorAll(".input, .textarea")
    console.log(inputElement)
    inputElement.forEach(input => {
      input.style.width = "100%"
    })
  }
  
  // styleLabel()
  styleInput()
});
