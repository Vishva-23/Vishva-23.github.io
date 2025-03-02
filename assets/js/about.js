document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById("read-more-btn");
  const moreContent = document.getElementById("more-content");

  readMoreBtn.addEventListener("click", function () {
    moreContent.classList.toggle("hidden");
    readMoreBtn.innerText = moreContent.classList.contains("hidden")
      ? "Read More"
      : "Show Less";
  });
});
