export const randomColor = () => {
  const h = Math.floor(Math.random() * 360);
  const s = 90;
  const l = 50;

  return `hsl(${h}, ${s}%, ${l}%)`;
};
