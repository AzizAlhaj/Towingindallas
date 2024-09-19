document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.pathname.toLowerCase();

    document.querySelectorAll('.nav-item.nav-link, .dropdown-item').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.nav-item.nav-link, .dropdown-item').forEach(link => {
        const activeValue = link.getAttribute('data-active');
        
        if (currentUrl.includes(activeValue) || (activeValue === 'home' && currentUrl === '/')) {
            link.classList.add('active');
        }
    });

    if (currentUrl.includes('/services')) {
        document.getElementById('servicesNav').classList.add('active');
    }
});