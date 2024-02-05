function hexCodeGen() {
  var characters = "0123456789ABCDEF";
  var randomColor = "#";

  for (var i = 0; i < 6; i++) {
    randomColor += characters[Math.floor(Math.random() * characters.length)];
  }

  return randomColor;
}

function isDuplicateColor(colors, newColor) {
  return colors.includes(newColor);
}

function reRun() {
  var generatedColors = [];

  for (var i = 1; i <= 5; i++) {
    var box = document.getElementById("box" + i);
    var newColor;

    do {
      newColor = hexCodeGen();
    } while (isDuplicateColor(generatedColors, newColor));

    generatedColors.push(newColor);

    box.style.backgroundColor = newColor;
    box.innerText = newColor;
  }
}

reRun();

function colorChange() {
  reRun();
}
