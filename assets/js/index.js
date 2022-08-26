//import { merge } from "lodash";

const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

for (let ele of books.sort((a, b) => a.author.localeCompare(b.author))) {
  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("style", "width: 18rem;");

  card.style.gap = "25px";
  card.style.marginBottom = "25px";
  card.style.textAlign = "right";
  card.style.border = "2px solid black";
  card.style.backgroundColor = "rgba(240,240,240)";

  let img = document.createElement("img");
  img.className = "card-img-top";
  img.setAttribute("src", ele.img);

  card.append(img);

  let cardBody = document.createElement("div");
  cardBody.classList = "card-body";
  cardBody.style.backgroundColor = "rgba(240,240,240)";

  card.append(cardBody);

  let header = document.createElement("h5");
  header.className = "card-title";
  header.innerHTML = ele.title;

  let paragraph = document.createElement("p");
  paragraph.className = "card-text";
  paragraph.innerHTML = ele.author.split(" ").reverse().join(", ");

  let isAlreadyRead = document.createElement("button");
  isAlreadyRead.className = "btn btn-secondary";
  isAlreadyRead.setAttribute("type", "button");
  isAlreadyRead.innerText = "To read";

  if (ele.alreadyRead) {
    isAlreadyRead.className = "btn btn-success";
    isAlreadyRead.innerText = "Read";
  }
  cardBody.append(header, paragraph, isAlreadyRead);

  let list = document.querySelector(".book-list");
  list.append(card);
}
