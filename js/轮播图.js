window.onload = function () {
  const carouselInner = document.querySelector('.carousel-inner');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const carouselImages = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;
  let intervalId;

  function showImage(index) {
    carouselImages.forEach((image, i) => {
      // image.style.display = 'none';
      // if (i === index) {
      //   image.style.display = 'block';
      // }

      if (i === index) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
  }

  function startAutoPlay() {
    intervalId = setInterval(nextImage, 2000);
  }

  function stopAutoPlay() {
    clearInterval(intervalId);
  }

  leftArrow.addEventListener('click', prevImage);
  rightArrow.addEventListener('click', nextImage);

  carouselInner.addEventListener('mouseenter', stopAutoPlay);
  carouselInner.addEventListener('mouseleave', startAutoPlay);
  leftArrow.addEventListener('mouseenter', stopAutoPlay);
  leftArrow.addEventListener('mouseleave', startAutoPlay);
  rightArrow.addEventListener('mouseenter', stopAutoPlay);
  rightArrow.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
  showImage(currentIndex);
};