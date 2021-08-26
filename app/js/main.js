const smoothLinks = document.querySelectorAll('a[href^="#"]');
const menuList = document.querySelector('.menu__list');
const btn = document.querySelector('.burger-btn');



for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (e) => {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

btn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

