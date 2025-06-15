const audio = document.getElementById('bgMusic');

window.addEventListener('click', () => {
  audio.play().catch(() => {
    console.log("Müzik oynatılamadı, tıklama ile denendi.");
  });
});
