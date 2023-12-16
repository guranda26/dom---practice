// შექმენი input, სადაც მომხმარებელს
// შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები,
// average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და
// გამოუტანე ეკრანზე
// ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

const section = document.createElement("section");

const input = document.createElement("input");
input.setAttribute("name", "average");
input.setAttribute("placeholder", "Enter numbers with :");

const button = document.createElement("button");
button.setAttribute("type", "submit");
button.innerText = "average";

const averageNum = document.createElement("div");
document.body.append(section);
section.append(input, button, averageNum);

let numbers = [];

button.addEventListener("click", (e) => {
  e.preventDefault();
  const inputNum = input.value;
  if (inputNum === "") {
    alert("Please enter numbers separated by ':'");
    return;
  }
  let length = input.value.length;

  for (let i = 1; i < length; i += 2) {
    if (inputNum[i] !== ":") {
      alert("Please enter numbers separated by ':'");
      return;
    }
  }
  let n = input.value.split(":");

  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
    let curNum = Number(n[i]);
    if (isNaN(curNum)) {
      alert("Enter only numbers with ':'");
      return;
    }
    sum += curNum;
    let average = sum / n.length;
    console.log(average);

    averageNum.textContent = `The average number is: ${average}`;
    averageNum.style.backgroundColor = "red";
    averageNum.style.display = "block";
  }
});
