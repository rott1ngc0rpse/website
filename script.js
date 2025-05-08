document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggle = document.getElementById('mode-toggle');
    const icon = toggle.querySelector('i');
    const ripple = document.querySelector('.ripple');

    if (!body.classList.contains('light')) {
        body.classList.add('dark');
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');
    }

    toggle.addEventListener('click', () => {
        ripple.classList.remove('active');
        void ripple.offsetWidth;
        ripple.classList.add('active');

        setTimeout(() => {
            const isDark = body.classList.contains('dark');
            body.classList.toggle('dark');
            body.classList.toggle('light');

            icon.classList.remove(isDark ? 'fa-moon-o' : 'fa-sun-o');
            icon.classList.add(isDark ? 'fa-sun-o' : 'fa-moon-o');
        }, 150);
    });
});


/* Nothing here... *places a backdoor* */