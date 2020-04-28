let fact = document.querySelector("#fact");
let factText = document.querySelector("#fact-text");

let numberInput = document.querySelector("#number-input");

// numberInput.addEventListener("input", getFactFetch);

function getFactFetch() {
  let number = numberInput.value;
  fetch(`http://numbersapi.com/` + number)
    .then((response) => response.JSON)
    .then((data) => {
      if (number != "") {
      }
    })
    .catch((err) => console.log(err));
}
getFactFetch();
