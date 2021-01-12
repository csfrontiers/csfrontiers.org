function setSlideshowSlide(id, n) {
    const slideshow = document.getElementById(id);
    const slides = slideshow.getElementsByClassName('slideshow-content');
    for (const slide of slides) slide.style.display = 'none';
    slides[n].style.display = 'block';
}
function slideshowNext(id) {
    const slideshow = document.getElementById(id);
    const slides = slideshow.getElementsByClassName('slideshow-content');
    let index = -1;
    for (let i = 0; i < slides.length; ++i) {
        if (slides[i].style.display === 'block') { index = i; break; }
    }
    setSlideshowSlide(id, (index + 1) % slides.length);
}
function slideshowPrev(id) {
    const slideshow = document.getElementById(id);
    const slides = slideshow.getElementsByClassName('slideshow-content');
    let index = slides.length;
    for (let i = 0; i < slides.length; ++i) {
        if (slides[i].style.display === 'block') { index = i; break; }
    }
    setSlideshowSlide(id, (index + slides.length - 1) % slides.length);
}

window.addEventListener('load', () => {
    for (const slideshow of document.getElementsByClassName('slideshow')) {
        setSlideshowSlide(slideshow.id, 0);
    }
});