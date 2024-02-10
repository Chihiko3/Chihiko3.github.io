let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat-pointing.jpeg") {
    myImage.setAttribute("src", "images/rabbit-post.png");
  } else {
    myImage.setAttribute("src", "images/cat-pointing.jpeg");
  }
};

// TODO: 想让书包移动到图片上的时候，图片的block包括outline按中心放大几个像素，实现一种浮动的感觉
// TOTO: 更进一步的话，想做出steam的卡片的样式，随鼠标小角度翻转
