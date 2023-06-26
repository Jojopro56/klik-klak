var gallery = document.getElementById("gallery");
var imageList = document.getElementById("imageList");
const images = imageList.getElementsByTagName("li");
var currentIndex = 0;

var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");

prevButton.addEventListener("click", function() {
  scrollGallery(1);
});

nextButton.addEventListener("click", function() {
  scrollGallery(-1);
});

function scrollGallery(direction) {
  currentIndex += direction;

  // Wrap around if reaching the end of the list
  if (currentIndex < 0) {
    currentIndex = images.length - 2;
  } else if (currentIndex >= images.length - 1) {
    currentIndex = 0;
  }

  var offset = currentIndex * images[0].offsetWidth;
  imageList.style.transform = "translateX(-" + offset + "px)";

  updateImageClasses();
}

function updateImageClasses() {
  var firstIndex = (currentIndex + images.length + 1 ) % images.length;
  var middleIndex = (currentIndex + images.length) % images.length;
  var lastIndex = (currentIndex + images.length + 1) % images.length;

  for (var i = 0; i < images.length; i++) {
    if (i === firstIndex) {
      images[i].classList.add("first");
    } else if (i === middleIndex) {
      images[i].classList.remove("first");
      images[i].classList.add("middle");
    } else if (i === lastIndex) {
      images[i].classList.remove("first", "middle");
      images[i].classList.add("last");
    } else {
      images[i].classList.remove("first", "middle", "last");
    }
  }
}

images[currentIndex + 1].classList.add("first");

//video 

const toggleButton2 = document.querySelector('#videoBtn');
const player = document.querySelector('#videoPlayer');

toggleButton2.addEventListener('click', function () {
    if (player.classList.contains('play')) { // als de div de class 'active' heeft
        player.classList.remove('play'); // haal de class active dan weg
        // video gepauseerd
        player.pause();
        icon = document.querySelector('.triangle img');
        icon.src = 'assets/icons/play.svg'

        toggleButton2.classList.remove('active');
    } else {
        player.classList.add('play'); // anders, voeg de class active toe
        //video played
        player.play();
        icon = document.querySelector('.triangle img');
        icon.src = 'assets/icons/pause.svg'

        toggleButton2.classList.add('active');
    }
});

// hamburger menu 

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.menu');
  menu.style.display = 'none';
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}




