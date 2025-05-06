import { fetchApi } from "../../utils/fetchApi";
import { printCards } from "../../utils/printCards";
import "./Search.css";

export const Search = ({ imgSrc, imgAlt, placeholderText }) => {
  const div = document.createElement("div");
  div.classList.add("search-container");

  let img;
  if (imgSrc) {
    const img = document.createElement("img");
    img.classList.add("search-icon");
    img.src = imgSrc;
    img.alt = imgAlt || "";
    div.append(img);
  }

  const input = document.createElement("input");
  input.classList.add("search-input");
  input.type = "text";
  input.placeholder = placeholderText || "";

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let imageList = await fetchApi(e.target.value);
      e.target.value = "";

      if (!sessionStorage.getItem("firstSearch")) {
        sessionStorage.setItem("firstSearch", JSON.stringify(imageList));
      }

      if (imageList.length < 1) {
        imageList = await fetchApi("gatos");
        e.target.value = "perros";
      }

      printCards(imageList);
    }
  });

  div.append(input);

  return div;
};
