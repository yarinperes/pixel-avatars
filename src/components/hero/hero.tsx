import { memo } from 'react';
import { st, classes } from './hero.st.css';
import { Lemala } from './lemala';
import { ThreeRects } from '../three-rects/three-rects';

export const Hero = memo(function Hero() {
    return (
        <section className={st(classes.root)}>
            <Lemala className={classes.backgroundRects} />
            <h1 className={classes.text}>Create your pixel avatar</h1>
            <ThreeRects className={classes.rects} />
        </section>
    );
});
