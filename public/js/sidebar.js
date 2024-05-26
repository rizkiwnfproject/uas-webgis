document.addEventListener('DOMContentLoaded', function () {
    var currentUrl = window.location.href;

    // Ambil semua tautan di sidebar
    var sidebarLinks = document.querySelectorAll('.field-sidebar a');

    // Iterasi melalui setiap tautan
    sidebarLinks.forEach(function (link) {
        // Jika URL dari tautan sama dengan URL halaman saat ini, tambahkan kelas 'active' ke tautan tersebut
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });

});