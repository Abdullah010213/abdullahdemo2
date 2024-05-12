//select popopoverlay and popopbox
var popopoverlay = document.querySelector(".popop-overlay");
var popopbox = document.querySelector(".popop-box");
var addbutton = document.getElementById("add-popop-button");

addbutton.addEventListener("click",function(){
    popopoverlay.style.display = "block";
    popopbox.style.display = "block";
});

//select cancel button
var cancelbutton = document.getElementById("cancel-popop");

cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popopbox.style.display = "none";
    popopoverlay.style.display = "none";
});

//select add button
var addbutton = document.getElementById("add-book");

addbutton.addEventListener("click",function(event){
    event.preventDefault();
    popopbox.style.display = "none";
    popopoverlay.style.display = "none";

    var div = document.createElement("div");

    div.setAttribute("class","Book-container");
    div.innerHTML = `<h1>${bookTitle.value}</h1>` + `<h5>${bookAuther.value}</h5>` + 
                    `<p>${bookDescription.value}</p>` + `<button onclick="deleteBook(event)">Delete</button>`;
    container.append(div);
});

//select container,book-title,book-auther,book-description
var container = document.querySelector(".container");
var bookTitle = document.getElementById("book-title-input");
var bookAuther = document.getElementById("book-auther-input");
var bookDescription = document.getElementById("book-description-input");

function deleteBook(event){
    event.target.parentElement.remove();
}