const popButton = document.getElementById('popButton');
const popImage = document.getElementById('popImage');

popButton.addEventListener('mouseenter', () => {
  popImage.classList.add('active');
});

popButton.addEventListener('mouseleave', () => {
  popImage.classList.remove('active');
});
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const opacity = Math.min(scrollPosition / 1000, 1); // Adjust 1000 to control the speed of the effect

  if (scrollPosition > 500 && scrollPosition > lastScrollTop) { // Change video after scrolling a certain amount and scrolling down
    document.getElementById('bg-video').src = 'your-new-video.mp4'; // Replace with new video source
  }

  document.querySelector('.bg-overlay').style.opacity = opacity;
  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition
