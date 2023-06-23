import { memo } from 'react';
import { Stage } from './stage/stage';
import { Controls } from './controls/controls';
import { st, classes } from './playground.st.css';

export const Playground = memo(function Playground() {
    return (
        <div className={st(classes.root)}>
            <Stage />
            <Controls />
        </div>
    );
});
