import { useContext, useState } from 'react';
import { Avatar } from '../avatar/avatar';
import { classes } from './stage.st.css';
import { AvatarContext } from '../context';

export const Stage = ({ avatarRef }: { avatarRef: React.RefObject<SVGSVGElement> }) => {
    const [size, setSize] = useState(300);
    const avatar = useContext(AvatarContext);

    return (
        <div className={classes.root}>
            <div className={classes.preview}>
                <Avatar size={size} avatarRef={avatarRef} avatar={avatar} />
            </div>
            <input
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className={classes.scale}
                type="range"
                min="100"
                max="500"
            />
        </div>
    );
};
