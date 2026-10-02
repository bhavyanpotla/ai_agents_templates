document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.module-card');

    // Add a simple entrance animation to the cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); 
    });

    // Optional: Log navigation intent for internal analytics tracking
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            console.log(`Navigating to: ${card.querySelector('h2').innerText}`);
            // e.preventDefault() can be used here if loading content dynamically via fetch API instead of standard navigation
        });
    });
});