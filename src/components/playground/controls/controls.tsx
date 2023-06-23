import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { STEPS } from '../constants';
import { st, classes } from './controls.st.css';
import { Control } from './control/control';
import { AvatarContext } from '../context';
import { randomAvatar } from '../utils';

export const Controls = memo(function Controls() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const step = STEPS[currentIndex];
    const { setLayers } = useContext(AvatarContext);

    const previous = useCallback(
        () =>
            currentIndex === 0
                ? setCurrentIndex(STEPS.length - 1)
                : setCurrentIndex(currentIndex - 1),
        [currentIndex]
    );

    const next = useCallback(
        () =>
            currentIndex === STEPS.length - 1
                ? setCurrentIndex(0)
                : setCurrentIndex(currentIndex + 1),
        [currentIndex]
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                previous();
            } else if (e.key === 'ArrowRight') {
                next();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [previous, next]);

    const generate = useCallback(() => {
        setLayers(randomAvatar());
    }, [setLayers]);

    return (
        <div className={st(classes.root)}>
            <Control
                previous={previous}
                next={next}
                key={step.name}
                colors={step.colors}
                name={step.name}
                layer={step.options}
            />
            <button onClick={generate} className={classes.generate}>
                Generate
            </button>
        </div>
    );
});
