import { Swiper, Pagination } from "swiper";

Swiper.use(Pagination);

const descriptionSlider = new Swiper(".description__items", {
    slidesPerView: 1,
    spaceBetween: 80,
    pagination: {
        el: '.description__items-pagination',
        type: 'bullets',
        clickable: true,
    },
}); 