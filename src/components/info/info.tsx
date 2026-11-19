import { memo, type PropsWithChildren } from 'react';
import { st, classes } from './info.st.css';
import { ThreeRects } from '../three-rects/three-rects';

export const Info = memo(function Info() {
    return (
        <section className={st(classes.root)}>
            <InfoBox background="#E8E7FF">Build your own avatar in pixel art style</InfoBox>
            <InfoBox left={120} align="end" background="#FFE4ED">
                Generate your new avatar with our algorithm
            </InfoBox>
            <InfoBox left={100} background="#ECF5F9">
                View this project on Figma Community
            </InfoBox>
            <ThreeRects className={classes.rects} />
        </section>
    );
});

function InfoBox({
    children,
    background,
    align = 'start',
    left = 0,
}: PropsWithChildren<{
    background: string;
    left?: number;
    align?: 'start' | 'end';
}>) {
    return (
        <div className={classes.infoBox} style={{ alignSelf: align }}>
            <div className={classes.rect} style={{ background, left: `${left}px` }} />
            <div className={classes.infoBoxText}>{children}</div>
        </div>
    );
}
