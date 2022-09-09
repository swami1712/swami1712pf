var wordSet = ["Competitive coder", "Web developer"];
var speed = 80,
  i = 0,
  j = 1,
  colorChanger = 0;
var string = "",
  newString = "";
var colorStr = ["red", "blue"];
var myTxt = wordSet[0];
function type() {
  myTxt = wordSet[j];
  if (i < myTxt.length) {
    string += myTxt.charAt(i);
    $("#feature-text").text(string);
    $("#feature-text").css("color", colorStr[j]);
    i++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, speed + 2200);
  }
}
function erase() {
  if (i + 1 > 0) {
    string = string.substring(0, i);
    string = string + string.charAt(i);
    $("#feature-text").text(string);

    i--;
    setTimeout(erase, 20);
  } else {
    if (j == 1) {
      j = 0;
    } else {
      j = 1;
    }
    setTimeout(type, speed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (myTxt.length) setTimeout(type, speed);
});

// var typedTextSpan = document.querySelector("#feature-text");
// var cursorSpan = document.querySelector(".input-cursor");
// var arrayCol = ["red", "blue"];
// var textArray = ["Competitive coder", "Web developer"];
// var typingDelay = 100;
// var erasingDelay = 100;
// var newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if (!cursorSpan.classList.contains("typing"))
//       cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } else {
//     cursorSpan.classList.remove("typing");
//     setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     if (!cursorSpan.classList.contains("typing"))
//       cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(
//       0,
//       charIndex - 1
//     );
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // On DOM Load initiate the effect
//   if (textArray.length) setTimeout(type, newTextDelay + 250);
// });

// jQuery for card-carousel

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
