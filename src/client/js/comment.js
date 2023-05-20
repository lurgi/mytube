const video = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const commentContainer = document.getElementById("commentContainer");

const addComment = (id, text) => {
  const firstDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.dataset.id = id;
  deleteBtn.addEventListener("click", deleteComment);
  secondDiv.innerText = text;
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(deleteBtn);
  commentContainer.prepend(firstDiv);
};

const handleClick = async (e) => {
  e.preventDefault();
  const comment = document.getElementById("comment");
  const text = comment.value;
  const { id } = video.dataset;
  const response = await fetch(`/api/videos/${id}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    comment.value = "";
    const { newCommentId } = await response.json();
    addComment(newCommentId, text);
  }
};

if (form) {
  form.addEventListener("submit", handleClick);
}

const commentDelete = document.querySelectorAll(".commentDelete");
const deleteComment = async (e) => {
  const { id: videoId } = video.dataset;
  const { id: commentId } = e.target.dataset;
  const response = await fetch(
    `/api/video/${videoId}/comment/${commentId}/delete`,
    {
      method: "POST",
    }
  );
  if (response.status === 200) {
    e.target.parentNode.remove();
  }
};
for (let i = 0; i < commentDelete.length; i++) {
  commentDelete[i].addEventListener("click", deleteComment);
}
