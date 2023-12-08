let slideshowRunning = false;

function startSlideShow() {
    const slideshow = document.getElementById('slideshow-container');
    const slides = document.getElementsByClassName('mySlides');

    if (!slideshowRunning) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'block';
        }

        slideshowRunning = true;
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slideshowRunning = false;
    }
}