const images = [
    'D:/Alveus/images/Abbott.jpg',
    'D:/Alveus/images/Appa.jpg',
    'D:/Alveus/images/Awa.jpg',
    'D:/Alveus/images/BakedBean.jpg',
    'D:/Alveus/images/Barbara.jpg',
    'D:/Alveus/images/ChipsAhoy.jpg',
    'D:/Alveus/images/Coconut.jpg',
    'D:/Alveus/images/Ducky.jpg',
    'D:/Alveus/images/Fenn.jpg',
    'D:/Alveus/images/Georgie.jpg',
    'D:/Alveus/images/Hank.jpg',
    'D:/Alveus/images/Henrique.jpg',
    'D:/Alveus/images/Jalapeno.jpg',
    'D:/Alveus/images/Marty.jpg',
    'D:/Alveus/images/Mia.jpg',
    'D:/Alveus/images/Miley.jpg',
    'D:/Alveus/images/Momo.jpg',
    'D:/Alveus/images/Moomin.jpg',
    'D:/Alveus/images/Noodle.jpg',
    'D:/Alveus/images/Nugget.jpg',
    'D:/Alveus/images/Oliver.jpg',
    'D:/Alveus/images/Patchy.jpg',
    'D:/Alveus/images/Polly.jpg',
    'D:/Alveus/images/Puppy.jpg',
    'D:/Alveus/images/PushPop.jpg',
    'D:/Alveus/images/Reed.jpg',
    'D:/Alveus/images/Serrano.jpg',
    'D:/Alveus/images/Siren.jpg',
    'D:/Alveus/images/Snork.jpg',
    'D:/Alveus/images/Stompy.jpg',
    'D:/Alveus/images/Tico.jpg',
    'D:/Alveus/images/Timber.jpg',
    'D:/Alveus/images/Toast.jpg',
    'D:/Alveus/images/Tortellini.jpg',
    'D:/Alveus/images/VanillaWafer.jpg',
    'D:/Alveus/images/Winnie.jpg',

];

let currentIndex = 0;

function updateSlideshow() {
  const slideshowImage = document.getElementById('slideshow-image');

  slideshowImage.classList.remove('show');

  setTimeout(() => {
    slideshowImage.src = images[currentIndex];
    

    slideshowImage.classList.add('show');
  }, 1000); 

  currentIndex = (currentIndex + 1) % images.length;
}

document.addEventListener("DOMContentLoaded", () => {
  const slideshowImage = document.getElementById('slideshow-image');
  slideshowImage.classList.add('show');
});


setInterval(updateSlideshow, 3000);

document.querySelectorAll('.carousel').forEach(carousel => {
});

const params = new URLSearchParams(window.location.search);
    const ambassadorId = params.get('id');
