import { Card } from "../components/Card/Card";
import { randomColor } from "./randomColor";

export const printCards = (imageList) => {
  const imgListContainer = document.querySelector(".img-list-container");

  imgListContainer.innerHTML = "";

  for (let i = 0; i < imageList.length; i++) {
    const card = Card({
      imgSrc: imageList[i].urls.thumb,
      imgAlt: imageList[i].description,
      views: imageList[i].stats.views > 60 ? "+60" : imageList[i].stats.views,
      likes: imageList[i].likes > 500 ? "+500" : imageList[i].likes,
      userPhoto: imageList[i].user.profile_image.large,
      userName: imageList[i].user.name,
      creationDate: imageList[i].created_at
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/"),
      downloadLink: imageList[i].links.download,
      userHtmlLink: imageList[i].user.links.html,
      userPhotoBorderColor: randomColor(),
    });

    imgListContainer.append(card);
  }
};
