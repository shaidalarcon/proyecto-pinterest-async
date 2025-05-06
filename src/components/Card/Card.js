import { Button } from "../Button/Button";
import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  views,
  likes,
  userPhoto,
  userName,
  creationDate,
  downloadLink,
  userHtmlLink,
  userPhotoBorderColor,
}) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = imgSrc;
  img.alt = imgAlt;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const viewsBtn = Button({
    text: views,
    imgSrc: "/camera.png",
    imgAlt: "views-icon",
  });
  viewsBtn.classList.add("views-btn");

  const likesBtn = Button({
    text: likes,
    imgSrc: "/likes.png",
    imgAlt: "likes-icon",
  });
  likesBtn.classList.add("likes-btn");

  const visitBtn = Button({
    text: "Visitar",
  });
  visitBtn.classList.add("visit-btn");

  visitBtn.addEventListener("click", () => {
    window.open(downloadLink, "_blank");
  });

  imgContainer.append(img, overlay, viewsBtn, likesBtn, visitBtn);

  const userContainer = document.createElement("div");
  userContainer.classList.add("user-container");

  const photo = document.createElement("img");
  photo.classList.add("user-photo");
  photo.src = userPhoto;
  photo.alt = "user-photo";
  photo.style.border = `8px solid ${userPhotoBorderColor}`;

  photo.addEventListener("click", () => {
    window.open(userHtmlLink, "_blank");
  });

  const name = document.createElement("p");
  name.classList.add("user-name");
  name.textContent = userName;

  const div = document.createElement("div");
  div.classList.add("container");

  const downloadBtn = Button({
    imgSrc: "/downloadicon.png",
    imgAlt: "download-icon",
  });
  downloadBtn.classList.add("download-btn");

  const date = document.createElement("p");
  date.classList.add("creation-date");
  date.textContent = creationDate;

  div.append(downloadBtn, date);

  userContainer.append(photo, name, div);

  card.append(imgContainer, userContainer);

  return card;
};
