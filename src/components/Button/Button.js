import "./Button.css";

export const Button = ({ text, imgSrc, imgAlt, fnc = () => {} }) => {
  const button = document.createElement("button");
  button.classList.add("btn");

  button.textContent = text || "";

  if (imgSrc) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt || "";
    button.append(img);
  }

  button.addEventListener("click", fnc);

  return button;
};
