import "./Main.css";

export const Main = () => {
  const main = document.createElement("main");

  const div = document.createElement("div");
  div.classList.add("img-list-container");

  main.append(div);

  return main;
};
