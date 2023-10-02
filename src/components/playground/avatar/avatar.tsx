import { memo } from 'react';
import { st, classes } from './avatar.st.css';
import { BEARDS, FACES, SHIRTS, MOUTHS, NOSES, HAIRS, EYES, SUNGLASSES, HATS } from '../constants';
import { type AvatarProperties } from '../context';

interface AvatarProps {
    className?: string;
    avatar: AvatarProperties;
    avatarRef?: React.RefObject<SVGSVGElement>;
    size: number;
}

export const Avatar = memo<AvatarProps>(function Avatar({
    className,
    avatarRef,
    avatar: { eyes, face, hair, hat, mouth, nose, shirt, sunglasses, beard, background },
    size,
}) {
    const Face = face.selected && FACES[face.selected];
    const Beard = beard.selected && BEARDS[beard.selected];
    const Shirt = shirt.selected && SHIRTS[shirt.selected];
    const Mouth = mouth.selected && MOUTHS[mouth.selected];
    const Nose = nose.selected && NOSES[nose.selected];
    const Hair = hair.selected && HAIRS[hair.selected];
    const Eyes = eyes.selected && EYES[eyes.selected];
    const Hat = hat.selected && HATS[hat.selected];
    const Sunglasses = sunglasses.selected && SUNGLASSES[sunglasses.selected];

    return (
        <svg
            ref={avatarRef}
            width={size}
            height={size}
            viewBox={'0 0 120 120'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={st(classes.root, className)}
            style={{ background: background.color, height: `${size}px`, width: `${size}px` }}
        >
            {Shirt && <Shirt color={shirt.color} />}
            {Face && <Face color={face.color} />}
            {Mouth && <Mouth />}
            {Beard && <Beard color={beard.color} />}
            {Hair && <Hair color={hair.color} />}
            {Eyes && <Eyes color={eyes.color} />}
            {Nose && <Nose color={nose.color} />}
            {Hat && <Hat />}
            {Sunglasses && <Sunglasses />}
        </svg>
    );
});
