import {
    BACKGROUND_COLORS,
    BEARDS,
    type Beard,
    HAIR_COLORS,
    HAIRS,
    type Hair,
    EYES,
    type Eyes,
    EYES_COLORS,
    FACES,
    type Face,
    FACE_COLORS,
    HATS,
    type Hat,
    MOUTHS,
    type Mouth,
    NOSES,
    type Nose,
    SHIRTS,
    type Shirt,
    SHIRT_COLORS,
    SUNGLASSES,
    type Sunglasses,
} from './constants';

export function randomValueFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomEntry<T>(array: T[]) {
    return Math.random() > 0.5 ? randomValueFromArray(array) : undefined;
}

export function randomAvatar() {
    return {
        background: {
            color: randomValueFromArray(BACKGROUND_COLORS),
        },
        beard: {
            selected: randomEntry(Object.keys(BEARDS)) as Beard,
            color: randomValueFromArray(HAIR_COLORS),
        },
        hair: {
            selected: randomEntry(Object.keys(HAIRS)) as Hair,
            color: randomValueFromArray(HAIR_COLORS),
        },
        eyes: {
            selected: randomValueFromArray(Object.keys(EYES)) as Eyes,
            color: randomValueFromArray(EYES_COLORS),
        },
        face: {
            selected: randomValueFromArray(Object.keys(FACES)) as Face,
            color: randomValueFromArray(FACE_COLORS),
        },
        hat: {
            selected: randomEntry(Object.keys(HATS)) as Hat,
        },
        mouth: {
            selected: randomEntry(Object.keys(MOUTHS)) as Mouth,
        },
        nose: {
            selected: randomEntry(Object.keys(NOSES)) as Nose,
            color: randomValueFromArray(FACE_COLORS),
        },
        shirt: {
            selected: randomValueFromArray(Object.keys(SHIRTS)) as Shirt,
            color: randomValueFromArray(SHIRT_COLORS),
        },
        sunglasses: {
            selected: randomEntry(Object.keys(SUNGLASSES)) as Sunglasses,
        },
    };
}
