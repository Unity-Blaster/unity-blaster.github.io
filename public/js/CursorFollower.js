const follow = document.getElementById("follow");
document.addEventListener("pointermove", (event) => {
  const { clientX, clientY } = event;
  if (follow) {
    follow.style.left = clientX + "px";
    follow.style.top = clientY + "px";
    follow.style.animationDuration = "3000";
    follow.style.animationFillMode = "forwards";
  }
});
