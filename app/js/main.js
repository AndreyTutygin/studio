import Swiper from 'swiper/bundle';
require('fslightbox');

import './components/burger';
import './components/scroll';
import './components/scroll-up';
import './components/testWebP';

const swiper = new Swiper(".portfolio__images-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
});

const swiper2 = new Swiper(".specialization__items-swiper", {
    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
    },
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
});
