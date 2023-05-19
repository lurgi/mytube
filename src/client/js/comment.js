const video = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleClick = (e) => {
  e.preventDefault();
  const comment = document.getElementById("comment");
  const text = comment.value;
  const { id } = video.dataset;
  comment.value = "";
  fetch(`/api/videos/${id}/comment`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ text }),
  });
};

if (form) {
  form.addEventListener("submit", handleClick);
}
