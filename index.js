const $ = document;
const box1 = $.querySelector(".box1");
const box2 = $.querySelector(".box2");
const box3 = $.querySelector(".box3");

const text1 = $.querySelector(".text-1");
const text2 = $.querySelector(".text-2");
const text3 = $.querySelector(".text-3");

const g1 = $.querySelector(".g-1");
const g2 = $.querySelector(".g-2");
const g3 = $.querySelector(".g-3");
let active2 = false;
let active3 = false;

box2.addEventListener("click", () => {
  active2 = true;
  if (active3) {
    box3.style.cssText =
      "top:320px;right:300px;z-index:0;background: none;opacity:0.7";
    box1.style.cssText =
      "top:40px;right:100px;z-index:1;background: linear-gradient(to right, rgb(31, 78, 233) 60%, rgb(89, 124, 189));opacity:1";
      
      g1.style.color = "white";
      text1.style.color = "white";
      text3.style.color = "black";
      g3.style.color = "rgb(31, 78, 233)";
    }
    box2.style.cssText =
    "top:150px;right:100px;z-index:1;background: linear-gradient(to right, rgb(31, 78, 233) 60%, rgb(89, 124, 189));opacity:1";
    box1.style.cssText =
    "top:40px;right:300px;z-index:0;background: none;opacity:0.7";
    text2.style.color = "white";
  text1.style.color = "black";
  g2.style.color = "white";
  g1.style.color = "rgb(31, 78, 233)";
});
box3.addEventListener("click", () => {
  active3 = true;
  if (active2) {
    box1.style.cssText =
    "top:150px;right:100px;z-index:1;background: linear-gradient(to right, rgb(31, 78, 233) 60%, rgb(89, 124, 189));opacity:1";
    box2.style.cssText =
    "top:40px;right:300px;z-index:0;background:none;opacity:0.7";
    active2 = false;
    g1.style.color = "white";
    text1.style.color = "white";
    text2.style.color = "black";
    g2.style.color = "rgb(31, 78, 233)";
  }
  box3.style.cssText =
  "top:150px;right:100px;z-index:1;background: linear-gradient(to right, rgb(31, 78, 233) 60%, rgb(89, 124, 189));opacity:1";
  box1.style.cssText =
  "top:320px;right:300px;z-index:0;background:none;opacity:0.7";
  text3.style.color = "white";
  text1.style.color = "black";
  g3.style.color = "white";
  g1.style.color = "rgb(31, 78, 233)";
});
box1.addEventListener("click", () => {
  box1.style.cssText =
    "top:150px;right:100px;z-index:1;background: linear-gradient(to right, rgb(31, 78, 233) 60%, rgb(89, 124, 189));opacity:1";
  box2.style.cssText =
    "top:40px;right:300px;z-index:0;box-shadow:none;opacity:0.7";
  box3.style.cssText =
    "top:320px;right:300px;z-index:0;background: none;opacity:0.7";
  text3.style.color = "black";
  text2.style.color = "black";
  text1.style.color = "white";
  g3.style.color = "rgb(31, 78, 233)";
  g2.style.color = "rgb(31, 78, 233)";
  g1.style.color = "white";
});
