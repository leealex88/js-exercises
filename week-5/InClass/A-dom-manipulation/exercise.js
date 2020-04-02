/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

// let alertButton = document.querySelector("#alertBtn");
// console.log(alertButton);

// alertButton.addEventListener("click", function() {
//   alert("Thanks for visiting Bikes for Refugees!");
// });

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// let changeButton = document.querySelector('#bgrChangeBtn');
// changeButton.addEventListener("click", changeColor);
// function changeColor() {
//   document.querySelector('body').style.backgroundColor = 'red';
// }

// const colorButton = document.getElementById("bgrChangeBtn");

// colorButton.addEventListener("click", changeBackgroundColor);

// function changeBackgroundColor() {
//   document.querySelector("body").style.background = "pink";
// }
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

// const textButton = document.querySelector("#addTextBtn");
// const sectionToAddParagraph = document.querySelector(".buttons");
// textButton.addEventListener("click", displayParagrapg);

// function displayParagrapg() {
//   let paragraph = document.createElement("p");
//   paragraph.innerText = "Read more below.";
//   sectionToAddParagraph.appendChild(paragraph);
// }
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

// const button = document.querySelector("#largerLinksBtn");

// let aTags = document.querySelectorAll("a");

// button.addEventListener("click", function() {
//   for (let i = 0; i < aTags.length; i++) {
//     aTags[i].style.fontSize = "22px";
//   }
// });
