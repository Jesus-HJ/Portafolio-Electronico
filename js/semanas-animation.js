import { animate, stagger } from 'https://cdn.jsdelivr.net/npm/animejs@4.2.2/+esm';

const cards = document.querySelectorAll('.semana-card');

document.addEventListener('semanaMostrada', () => {

    const detalle = document.querySelector('.detalle');

    if (detalle) {
        animate(detalle, {
            opacity: [0, 1],
            y: [30, 0],
            duration: 600,
            ease: 'out(3)'
        });
    }

});

if (cards.length) {

    // Animación al entrar a la página
    animate(cards, {
        opacity: [0, 1],
        y: [40, 0],
        scale: [0.95, 1],
        duration: 700,
        delay: stagger(120),
        ease: 'out(3)'
    });

    // Animación al hacer clic
    cards.forEach((card) => {

        card.addEventListener('click', () => {

            animate(card, {
                scale: [1, 0.96, 1],
                y: [0, -6, 0],
                duration: 450,
                ease: 'out(3)'
            });

        });

    });
}