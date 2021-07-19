let index = 1;
afficher(index); // afficher la premiere image

// incrementer l'index de n et afficher l'image correspondante
function incrementer(n)  { afficher(index += n); }

// afficher l'image a l'index n
function positionActuelle(n) { afficher(index = n); }

function afficher(n) {
    let i;
    let slides = document.getElementsByClassName("projects-box");
    let descriptions = document.getElementsByClassName("projects-description");
    let dots = document.getElementsByClassName("dot");

    //Si on est arrive au bout
    if (n > slides.length)  index = 1; // Remettre au debut

    if (n < 1) index = slides.length; // Mettre a la fin

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; // Cacher toutes les images
        descriptions[i].style.display = "none"; // Cacher toutes les descriptions
        dots[i].className = dots[i].className.replace("active", ""); // remettre les dots en non-active
    }

    slides[index - 1].style.display = "block"; // mettre a jour l'affichage
    descriptions[index - 1].style.display = "block"; // mettre a jour l'affichage
    dots[index - 1].className += " active"; // mettre a jour l'affichage des dots
}
