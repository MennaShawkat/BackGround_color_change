let index = 0;

function changeColors() {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const body = document.getElementsByTagName("body")[0];

  body.style.background = colors[index++];

  if (index >= colors.length) {
    index = 0;
  }
}
