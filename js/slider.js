// Fungsi untuk animasi progress bar
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    
    progressBars.forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        // Set lebar awal menjadi 0 dan kemudian animasikan ke persentase
        bar.style.width = '0%';
        
        // Animasi progress bar dengan delay
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-out';
            bar.style.width = `${percent}%`;
        }, 100); // 100ms delay sebelum animasi dimulai
    });
});