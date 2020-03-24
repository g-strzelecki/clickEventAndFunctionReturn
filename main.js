document.body.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const color = getColor(e);

  document.body.style.backgroundColor = color;
  console.log(x, y);
});

const getColor = (event) => {
  if (event.x % 2 === 0 && event.y % 2 === 0) {
    return "red";
  } else if (event.x % 2 !== 0 && event.y % 2 !== 0) {
    return "blue";
  } else return "green";

}
