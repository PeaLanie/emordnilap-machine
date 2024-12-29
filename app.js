const input = document.querySelector("#input");
const output = document.querySelector("#output");
const reverseBtn = document.querySelector("#reverse-btn");
const clearBtn = document.querySelector("#clear-btn");

reverseBtn.addEventListener("click", () => {
  const reversedWord = input.value.toLowerCase().split("").reverse().join("");
  output.value = reversedWord;
  input.value = input.value.toLowerCase();
})

clearBtn.addEventListener("click", () => {
  input.value = "";
  output.value = "";
})