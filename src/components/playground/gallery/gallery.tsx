import { memo, useEffect, useState } from 'react';
import type { AvatarProperties } from '../context';
import { Avatar } from '../avatar/avatar';
import { randomAvatar } from '../utils';
import { st, classes } from './gallery.st.css';

export const Gallery = memo(function Gallery() {
    const [avatars, setAvatars] = useState<AvatarProperties[]>(generateAvatars());

    useEffect(() => {
        const interval = setInterval(() => {
            const indexes: number[] = [];
            for (let i = 0; i < 10; i++) {
                indexes.push(Math.floor(Math.random() * avatars.length));
            }

            setAvatars((avatars) =>
                avatars.map((avatar, i) => (indexes.includes(i) ? randomAvatar() : avatar))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [avatars.length]);

    return (
        <section className={st(classes.root)}>
            {avatars.map((avatar, i) => (
                <Avatar avatar={avatar} key={i} />
            ))}
        </section>
    );
});

function generateAvatars() {
    const avatars = [];

    for (let i = 0; i < 50; i++) {
        avatars.push(randomAvatar());
    }

    return avatars;
}
