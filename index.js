var wordSet = ["Competitive coder", "Web developer"];
var speed = 100,
  i = 0,
  colorChanger = 0;
var string = "";
var colorStr = ["red", "blue"];
var myTxt = wordSet[0];
function typeWriter() {
  if (i < myTxt.length) {
    string += myTxt.charAt(i);
    $("#feature-text").text(string);
    $("#feature-text").css("color", colorStr[colorChanger]);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
    string = "";
    setTimeout(typeWriter, 2000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (myTxt.length) setTimeout(typeWriter, speed + 250);
});
