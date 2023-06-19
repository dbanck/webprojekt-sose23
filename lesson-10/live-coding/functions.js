let likeCount = 0;

function like() {
  const likeElement = document.getElementById("likeCount");

  // count up
  likeCount = likeCount + 1;

  likeElement.textContent = likeCount;
}

// Alternative Lösung ohne Variable im JS
function likeTwo() {
  const likeElement = document.getElementById("likeCount");

  const likeCountAsNumber = parseInt(likeElement.textContent);
  const newLikeCount = likeCountAsNumber + 1;

  likeElement.textContent = newLikeCount;
}
