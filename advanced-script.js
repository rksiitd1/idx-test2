document.addEventListener('DOMContentLoaded', () => {
    // Animate header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.animated-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Interactive Journey Map
    const journeyMap = document.getElementById('journey-map');
    const journeyDescription = document.getElementById('journey-description');
    
    // Create SVG map and add interactive elements
    // Add event listeners to show descriptions on hover/click

    // Greatness Potential Calculator
    const greatnessForm = document.getElementById('greatness-form');
    const greatnessResult = document.getElementById('greatness-result');

    greatnessForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ambition = parseInt(document.getElementById('ambition').value);
        const perseverance = parseInt(document.getElementById('perseverance').value);
        const innovation = parseInt(document.getElementById('innovation').value);

        const potentialScore = (ambition + perseverance + innovation) / 3 * 10;
        
        greatnessResult.textContent = `Your Greatness Potential Score: ${potentialScore.toFixed(2)}%`;
        greatnessResult.style.display = 'block';
    });

    // Add GSAP animations
    gsap.from(".manifesto-content p", {
        opacity: 0,
        y: 50,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#manifesto",
            start: "top center",
        }
    });

    // Add more animations and interactive features as needed
});