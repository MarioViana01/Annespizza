const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

const cards = [...document.querySelectorAll(".pizza-card")];

let index = 0;

// quantidade de cards visíveis
function visibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 4;
}

function moveCarousel() {

    const visible = visibleCards();

    const cardWidth = cards[0].offsetWidth + 20;

    track.style.transform =
        `translateX(-${index * cardWidth}px)`;

    prevBtn.disabled = index === 0;

    nextBtn.disabled =
        index >= cards.length - visible;
}

nextBtn.addEventListener("click", () => {

    const visible = visibleCards();

    if(index < cards.length - visible){
        index++;
        moveCarousel();
    }

});

prevBtn.addEventListener("click", () => {

    if(index > 0){
        index--;
        moveCarousel();
    }

});

window.addEventListener("resize", moveCarousel);

moveCarousel();