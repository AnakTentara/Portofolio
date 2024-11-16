document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      offset: 200, // Trigger animation after scrolling 200px from the top
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      delay: 100, // Delay between animations (if multiple elements animate)
    });
  });
  