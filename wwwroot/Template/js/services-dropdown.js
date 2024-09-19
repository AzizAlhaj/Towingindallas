document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 760) {
        document.getElementById('servicesNav').addEventListener('click', function (event) {
            if (event.target === this) {
                window.location.href = '/Services/Index';
            }
        });
    }
});

