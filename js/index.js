const likes = document.getElementsByClassName("like");
const likes_counter = document.getElementsByClassName("post-like-counter");

// status false means the user didn't likes this post yet
for (let i = 0; i < likes.length; i++) {
  likes[i]["status"] = false;
}

for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function () {
    if (likes[i].status == false) {
      let img = likes[i]
        .getElementsByTagName("button")[0]
        .getElementsByTagName("img")[0];
      img.src = "img/red-heart.png";
      const like = likes_counter[i].getElementsByTagName("h5")[0];
      let like_number = parseInt(like.innerHTML.split(" ")[0]);
      like_number++;
      like.innerHTML = `${like_number} likes`;
      likes[i].status = true;
    } else {
      let img = likes[i]
        .getElementsByTagName("button")[0]
        .getElementsByTagName("img")[0];
      img.src = "img/heart.png";
      const like = likes_counter[i].getElementsByTagName("h5")[0];
      let like_number = parseInt(like.innerHTML.split(" ")[0]);
      like_number--;
      like.innerHTML = `${like_number} likes`;
      likes[i].status = false;
    }
  });
}
