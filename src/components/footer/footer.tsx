import { memo } from 'react';
import { Lemata } from './lemata';
import { st, classes } from './footer.st.css';

export const Footer = memo(function Footer() {
    return (
        <footer className={st(classes.root)}>
            <Lemata className={classes.rects} />
            <p>Created by Yarin Peres</p>
        </footer>
    );
});
