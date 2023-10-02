import { useContext, useEffect, useState } from 'react';
import { Avatar } from '../avatar/avatar';
import { classes } from './stage.st.css';
import { AvatarContext } from '../context';

export const Stage = ({ avatarRef }: { avatarRef: React.RefObject<SVGSVGElement> }) => {
    const [size, setSize] = useState(300);
    const avatar = useContext(AvatarContext);
    const isMobile = useMediaQuery('(min-width: 500px)'); // true

    return (
        <div className={classes.root}>
            <div className={classes.preview}>
                <Avatar size={size} avatarRef={avatarRef} avatar={avatar} />
            </div>
            {isMobile && (
                <input
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className={classes.scale}
                    type="range"
                    min="100"
                    max="500"
                />
            )}
        </div>
    );
};

function useMediaQuery(param: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(param);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, param]);

    return matches;
}
