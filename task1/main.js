const modal = document.querySelector(".modal");

const submitBtn = modal.querySelector(".inner-btn");
const input = document.querySelector("input[name='name']");

const button = document.createElement("button");
button.type = "button";
button.innerText = "Open Modal";
button.className = "open-modal";

const section = document.createElement("section");
section.className = "section";

document.body.append(section);
section.append(button, modal);

console.log(button);

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (button.classList.contains("hide-modal")) {
    modal.style.display = "none";
    button.innerText = "Open Modal";
    button.classList.remove("hide-modal");
    section.style.backgroundColor = "initial";
  } else {
    modal.style.display = "block";
    button.innerText = "Hide Modal";
    button.classList.add("hide-modal");
    section.style.backgroundColor = "black";
  }
  e.stopPropagation();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "") {
    alert("Enter your name");
    return;
  } else {
    alert(`Thank you ${input.value}. We have received your data`);
    console.log(input.value);
  }
  input.value = "";
});

console.log(section);
