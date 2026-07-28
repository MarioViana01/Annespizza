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

/* Filtro simples por categoria — clique numa aba e mostra só os cards
   cujo data-category bate com o data-filter (ou todos, se "all"). */
(function () {
    const buttons = document.querySelectorAll('.cat-item');
    const cards   = document.querySelectorAll('.menu-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Alterna estado ativo dos botões
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const show = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('hidden', !show);
            });
        });
    });
})();


const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        links.forEach(item=>{
            item.classList.remove("ativo");
        });

        this.classList.add("ativo");

    });

});

// ================================
// EFEITO DOS CARDS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ================================
// BOTÃO PEÇA AGORA
// ================================

const botoes = document.querySelectorAll(".btn-header, .btn-banner");

botoes.forEach(botao=>{

    botao.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("Você será redirecionado para o cardápio.");

        // Exemplo:
        // window.location.href = "cardapio.html";

    });

});

// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    observer.observe(card);

});

// ================================
// ANIMAÇÃO DO TÍTULO
// ================================

const titulo = document.querySelector(".titulo h1");

let aumentar = true;

setInterval(()=>{

    if(aumentar){

        titulo.style.transform = "scale(1.03)";

    }else{

        titulo.style.transform = "scale(1)";

    }

    aumentar = !aumentar;

},800);

// ================================
// BOTÃO SUBIR AO TOPO
// ================================

const subir = document.createElement("button");

subir.innerHTML = "▲";

subir.id = "topo";

document.body.appendChild(subir);

subir.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#b30000;
color:white;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 0 15px rgba(255,0,0,.4);
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        subir.style.display = "block";

    }else{

        subir.style.display = "none";

    }

});

subir.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});