import { createTimeline, stagger, splitText } from 'https://cdn.jsdelivr.net/npm/animejs@4.2.2/+esm';

const { chars } = splitText('.logo-animation', {
    chars: {
        wrap: 'clip',
        clone: 'bottom'
    }
});

createTimeline()
    .add(
        chars,
        {
            y: '-100%',
            loop: true,
            loopDelay: 350,
            duration: 750,
            ease: 'inOut(2)'
        },
        stagger(150, { from: 'center' })
    );