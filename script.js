window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});


document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(control => {
    control.addEventListener('mouseover', () => {
        control.style.backgroundColor = 'rgba(213, 207, 207, 1)';
    });

    control.addEventListener('mouseout', () => {
        control.style.backgroundColor = 'transparent';
    });
});


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const searchQuery = document.getElementById('search-query').value.trim().toLowerCase();

    if (searchQuery) {
        
        if (searchQuery.includes('bridal')) {
            window.location.href = '#bridal-cars';  
        } else if (searchQuery.includes('towing')) {
            window.location.href = '#towing-services';  
        } else if (searchQuery.includes('trucking')) {
            window.location.href = '#trucking-services';  
        } else if (searchQuery.includes('equipment')) {
            window.location.href = '#heavy-equipment-rental'; 
        } else if (searchQuery.includes('construction')) {
            window.location.href = '#general-construction';  
        } else if (searchQuery.includes('furniture-hotel')) {
            window.location.href = '#furniture-hotel-residential';
        } else if (searchQuery.includes('contact')) {
            window.location.href = '#contact-section';
        } else if (searchQuery.includes('auto')) {
            window.location.href = '#auto-parts';
        } else {
            alert('Service not found. Please try again with a valid service name.');
        }
    } else {
        alert('Please enter a search term.');
    }
});