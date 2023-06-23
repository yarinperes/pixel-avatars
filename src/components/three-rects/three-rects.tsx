import { memo } from 'react';
import { st, classes } from './three-rects.st.css';

export const ThreeRects = memo(function ThreeRects({ className }: { className?: string }) {
    return (
        <div className={st(classes.root, className)}>
            <div />
            <div />
            <div />
        </div>
    );
});
