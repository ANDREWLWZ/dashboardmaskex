let taille1 = window.innerWidth;
let taille2 = document.body.clientWidth ;
let taille3 = document.documentElement.clientWidth;

//Si la taille de l'ecran est inferieure à 768px (petite tablette + mobile)
if( (taille1 < 768 || taille2 < 768 || taille3 < 768) ) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const elem = document.querySelectorAll('.menu li');
    const footer = document.querySelector('footer');

    hamburger.addEventListener('click', function ()
    {
        //cacher le footer
        footer.hidden = true;
        menu.classList.toggle('open');
        elem.forEach(element => { element.classList.toggle('fade'); } );

        //afficher le footer
        if(!menu.classList.contains('open')) footer.hidden = false;
    });
}
