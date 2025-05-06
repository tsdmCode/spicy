const bigImg = document.getElementById('big-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((el) => {
  el.addEventListener('click', () => {
    const temp = bigImg.src;
    bigImg.src = el.src;
    el.src = temp;
  });
});
