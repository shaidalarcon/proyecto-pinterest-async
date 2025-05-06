import "./Header.css";
import { navLinks } from "../../data/navLinks";
import { headerButtons } from "../../data/headerButtons";
import { NavLink } from "../NavLink/NavLink";
import { Search } from "../Search/Search";
import { Button } from "../Button/Button";
import { printCards } from "../../utils/printCards";

export const Header = () => {
  const header = document.createElement("header");

  const logo = Button({
    imgSrc: headerButtons[0].src,
    imgAlt: headerButtons[0].alt,
  });
  logo.classList.add("logo");

  logo.addEventListener("click", () => {
    if (sessionStorage.getItem("firstSearch")) {
      printCards(JSON.parse(sessionStorage.getItem("firstSearch")));
    }
  });

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  navLinks.forEach((navLink) => {
    ul.append(NavLink(navLink));
  });

  const search = Search({
    imgSrc: "./lupa.png",
    imgAlt: "buscar",
    placeholderText: "Buscar",
  });

  const inicio = ul.firstChild.firstChild;
  inicio.addEventListener("click", (e) => {
    e.preventDefault();
    if (sessionStorage.getItem("firstSearch")) {
      printCards(JSON.parse(sessionStorage.getItem("firstSearch")));
    }
  });

  const div = document.createElement("div");
  div.classList.add("btn-container");

  for (let i = 1; i < headerButtons.length; i++) {
    const button = Button({
      imgSrc: headerButtons[i].src,
      imgAlt: headerButtons[i].alt,
    });
    button.classList.add(`${headerButtons[i].alt}`);

    div.append(button);
  }

  nav.append(ul);
  header.append(logo, nav, search, div);

  return header;
};
