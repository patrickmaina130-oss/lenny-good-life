// 1. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Form Handling (Section 9)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Basic Validation
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        console.log("Form Submitted:", data);
        
        // Feedback
        alert('Thank you for contacting Good Life. We will get back to you shortly.');
        this.reset();
    });
}

// 3. Simple Interaction: Header Shrink on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// 4. Console Log for Debugging
console.log("Good Life Commercial Agencies Portal initialized.");
