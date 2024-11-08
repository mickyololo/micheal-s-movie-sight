const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movielists[i].querySelectorAll("img").length;
  let clickcounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 260);
    clickcounter++;
    if (itemNumber - (3 + clickcounter) + (3 - ratio) >= 0) {
      movielists[i].style.transform = `translatex(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 260
      }px)`;
    } else {
      movielists[i].style.transform = " translatex(0)";
      clickcounter = 0;
    }
  });

  // console.log(Math.floor(window.innerWidth / 100));
});
let playButton = document.querySelector(".play-movie");
// let video = document.querySelector(".video-conttainer");
let myvideo = document.querySelector("#myvideo");
let homeText = document.querySelector(".home-text");
let videoCon = document.querySelector("#video-con");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
  // video.classList.add("show-video");
  //auto play when clicked on button
  myvideo.play();
  videoCon.style.display = "block";
  homeText.style.display = "none";
};
closebtn.onclick = () => {
  // video.classList.remove("show-video");
  //auto play when clicked on button
  myvideo.pause();
  videoCon.style.display = "none";
  homeText.style.display = "block";
};
