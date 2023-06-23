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

export function randomAvatar() {
    return {
        background: {
            color: randomValueFromArray(BACKGROUND_COLORS),
        },
        beard: {
            selected: randomValueFromArray(Object.keys(BEARDS)) as Beard,
            color: randomValueFromArray(HAIR_COLORS),
        },
        hair: {
            selected: randomValueFromArray(Object.keys(HAIRS)) as Hair,
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
            selected: randomValueFromArray(Object.keys(HATS)) as Hat,
        },
        mouth: {
            selected: randomValueFromArray(Object.keys(MOUTHS)) as Mouth,
        },
        nose: {
            selected: randomValueFromArray(Object.keys(NOSES)) as Nose,
            color: randomValueFromArray(FACE_COLORS),
        },
        shirt: {
            selected: randomValueFromArray(Object.keys(SHIRTS)) as Shirt,
            color: randomValueFromArray(SHIRT_COLORS),
        },
        sunglasses: {
            selected: randomValueFromArray(Object.keys(SUNGLASSES)) as Sunglasses,
        },
    };
}
