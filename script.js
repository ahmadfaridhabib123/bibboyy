// Tambah interaksi sederhana untuk tombol "Sapa Saya"
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('sapaButton');
  btn.addEventListener('click', function () {
    // Contoh interaksi: munculkan salam di alert, lalu ubah teks tombol
    alert('Hai! Senang bertemu denganmu di sini.');
    btn.textContent = 'Terima kasih!';
    btn.disabled = true; // nonaktifkan tombol setelah disapa
  });
});
