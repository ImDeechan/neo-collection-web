const track = document.getElementById("carouselTrack");
const slides = track.children;
const slideCount = slides.length;

const slideWidth = slides[0].getBoundingClientRect().width + 16; // 16 = gap 1rem
let index = 0;

  // Clone semua slide untuk looping mulus
for (let i = 0; i < slideCount; i++) {
    track.appendChild(slides[i].cloneNode(true));
}

function slideNext() {
    index++;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    // Jika sudah melewati semua slide asli, reset tanpa animasi
    if (index >= slideCount) {
        setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            index = 0;
        }, 500);
    }
}

setInterval(slideNext, 2500); // ganti tiap 2.5 detik

