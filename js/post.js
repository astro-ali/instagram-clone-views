const like = document.getElementById("post-like");
const like_img = document.getElementById("img-like");
const like_counter = document
  .getElementById("likeCounter")
  .getElementsByTagName("h5")[0];
let like_number = parseInt(like_counter.innerHTML.split(" ")[0]);
let liked = false;

like.addEventListener("click", function () {
  if (liked == true) {
    like_img.src = "img/heart.png";
    like_number--;
    like_counter.innerHTML = `${like_number} likes`;
    liked = false;
  } else {
    like_img.src = "img/red-heart.png";
    like_number++;
    like_counter.innerHTML = `${like_number} likes`;
    liked = true;
  }
});
