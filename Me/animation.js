const modelViewer = document.querySelector('#book');

modelViewer.addEventListener('click', () => {
  if (modelViewer.paused) {
    modelViewer.play();
  } else {
    modelViewer.pause();
  }
});
