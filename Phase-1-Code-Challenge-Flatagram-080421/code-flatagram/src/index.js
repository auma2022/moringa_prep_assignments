// write your code here
let image = document.getElementById("card-image");
let title = document.getElementById("card-title");
const init = () => {
  const inputForm = document.querySelector("form");
  const data = document.getElementById("comment");
 
  
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    commentList = document.getElementById("comments-list");
    newComment = document.createElement("li");
    newComment.textContent = data.value;
    commentList.appendChild(newComment);
    

  });
};
document.addEventListener("DOMContentLoaded", init);
fetch("http://localhost:3000/images/1")
  .then((response) => response.json())
  .then(function (data) {
    let imgSrc = data.image;
    let imgTitle = data.title;
    title.textContent = imgTitle;
    image.src = imgSrc;
  });
  const likes = document.getElementById("like-count");
  const button = document.getElementById("like-button");
  button.addEventListener('click', () => {
    likes.textContent = parseInt(likes.innerHTML)+1;
    });