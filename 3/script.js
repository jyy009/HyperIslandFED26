document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const body = document.body;

  //create page container
  const pageContainer = document.createElement("div");
  pageContainer.setAttribute("id", "page-container");

  //move form into page container
  body.appendChild(pageContainer);
  pageContainer.appendChild(form);

  //style page container
  pageContainer.style.display = "flex";
  pageContainer.style.alignItems = "center";
  pageContainer.style.justifyContent = "center";
  pageContainer.style.height = "100vh";

  //remove line breaks
  let formContent = document.body.innerHTML;
  formContent = content.replace(/<br\s*[\/]?>/gi, "");

  //style form
  form.style.display = "flex";
  form.style.flexDirection = "column";

  const label = form.querySelector('label[for="name"]');

  label.style.display = "flex";
  label.style.flexDirection = "column";
});
