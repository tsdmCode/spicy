const kontakt = document.getElementById('kontakt-dialog');
const bigImg = document.getElementById('big-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const dialog = document.getElementById('imgDialog');
const gallery = document.querySelectorAll('.grid-item');
const dialogImg = document.getElementById('dialogImg');

function openForm(e) {
  e.preventDefault();

  kontakt.showModal();
}

gallery.forEach((el) => {
  el.addEventListener('click', () => {
    dialog.showModal(); //... åbner vores dialog...
    dialogImg.src = el.src; //... og sætter src værdien til samme værdi som det billede der blev trykket på!
  });
});

thumbnails.forEach((el) => {
  el.addEventListener('click', () => {
    const temp = bigImg.src;
    bigImg.src = el.src;
    el.src = temp;
  });
});

function closeDialog(e) {
  if (!e.target.contains(dialog)) return;
  dialog.close();
}

function closeKontakt(e) {
  if (!e.target.contains(kontakt)) return;
  kontakt.close();
}

document.addEventListener('click', closeDialog);
document.addEventListener('click', closeKontakt);
