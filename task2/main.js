// შექმენი input და button
//● input-ში მომხმარებელი ჩაწერს ფერს და
//button ღილაკზე დაწკაპების შემდეგ body-ს
//background შეიცვლება ჩაწერილ ფერად
//(ფერები რომლის ჩაწერაც შეუძლია: red,
//blue, green, black, white)

const button = document.createElement("button");
button.className = "btn";

button.innerText = "submit";
button.type = "submit";

const input = document.createElement("input");
input.type = "text";
input.name = "color";

const section = document.createElement("section");

const body = document.querySelector("body");

document.body.append(section);
section.append(input, button);

button.addEventListener("click", (e) => {
  e.preventDefault();
  const color = input.value;
  const setColors = ["red", "blue", "green", "black", "white"];

  if (!color) {
    alert("Please enter a color");
    return;
  }

  if (setColors.includes(color)) {
    body.style.backgroundColor = color;
    setTimeout(() => {
      input.value = "";
    }, 1000);
  } else {
    alert("Please provide the correct color");
    input.value = "";
  }
  console.log(input.value);
});
