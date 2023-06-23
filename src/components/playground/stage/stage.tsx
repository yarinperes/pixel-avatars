import { useContext } from 'react';
import { Avatar } from '../avatar/avatar';
import { st, classes } from './stage.st.css';
import { AvatarContext } from '../context';

export const Stage = () => {
    const avatar = useContext(AvatarContext);
    return (
        <div className={st(classes.root)}>
            <Avatar avatar={avatar} />
        </div>
    );
};
