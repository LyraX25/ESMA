const audio = document.getElementById('bgMusic');
const affetBtn = document.getElementById('affetBtn');

affetBtn.addEventListener('click', () => {
  // Müzik başlasın
  audio.play().catch(() => {
    console.log("Müzik başlatılamadı.");
  });

  // WhatsApp aç
  const mesaj = encodeURIComponent("Seni seviyorummmm ❤️");
  const numara = "905539772378"; // Esma'nın numarası
  const url = `https://wa.me/${numara}?text=${mesaj}`;
  window.open(url, '_blank');
});
document.getElementById('müzikBtn').addEventListener('click', () => {
  const audio = document.getElementById('bgMusic');
  audio.play().catch(() => {
    console.log("Kullanıcı etkileşimi olmadan çalamadı.");
  });
});
