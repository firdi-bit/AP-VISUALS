// 1. Mengubah tampilan Navbar saat di-scroll ke bawah
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Jika scroll lebih dari 50px dari atas
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        navbar.style.background = 'rgba(15, 15, 19, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(15, 15, 19, 0.9)';
    }
});

// 2. Mengatur tahun secara otomatis di bagian Footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}