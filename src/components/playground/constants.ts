import Beard01 from './assets/beard/beard-01';
import Beard02 from './assets/beard/beard-02';
import Beard03 from './assets/beard/beard-03';
import Beard04 from './assets/beard/beard-04';
import Beard05 from './assets/beard/beard-05';

import Eyes01 from './assets/eyes/eyes-01';
import Eyes02 from './assets/eyes/eyes-02';
import Eyes03 from './assets/eyes/eyes-03';
import Eyes04 from './assets/eyes/eyes-04';

import Face01 from './assets/face/face-01';
import Face02 from './assets/face/face-02';
import Face03 from './assets/face/face-03';

import Hair01 from './assets/hair/hair-01';
import Hair02 from './assets/hair/hair-02';
import Hair03 from './assets/hair/hair-03';
import Hair04 from './assets/hair/hair-04';
import Hair05 from './assets/hair/hair-05';
import Hair06 from './assets/hair/hair-06';
import Hair07 from './assets/hair/hair-07';
import Hair08 from './assets/hair/hair-08';

import Hat01 from './assets/hat/hat-01';
import Hat02 from './assets/hat/hat-02';
import Hat03 from './assets/hat/hat-03';

import Mouth01 from './assets/mouth/mouth-01';
import Mouth02 from './assets/mouth/mouth-02';
import Mouth03 from './assets/mouth/mouth-03';
import Mouth04 from './assets/mouth/mouth-04';

import Nose1 from './assets/nose/nose-01';
import Nose2 from './assets/nose/nose-02';
import Nose3 from './assets/nose/nose-03';
import Nose4 from './assets/nose/nose-04';
import Nose5 from './assets/nose/nose-05';

import Shirt1 from './assets/shirt/shirt-01';
import Shirt2 from './assets/shirt/shirt-02';
import Shirt3 from './assets/shirt/shirt-03';

import Sunglasses01 from './assets/sunglasses/sunglasses-01';
import Sunglasses02 from './assets/sunglasses/sunglasses-02';
import type { AvatarProperties } from './context';

export const BEARDS = {
    full: Beard01,
    ['beard-only']: Beard02,
    french: Beard03,
    mustache: Beard04,
    long: Beard05,
} as const;

export const EYES = { regular: Eyes01, big: Eyes02, down: Eyes03, small: Eyes04 } as const;

export const FACES = { sharp: Face01, ellipse: Face02, round: Face03 } as const;

export const HAIRS = {
    ['curly-long']: Hair01,
    medium: Hair02,
    ['half-bald']: Hair03,
    ['short-1']: Hair04,
    bob: Hair05,
    ['short-2']: Hair06,
    long: Hair07,
    mohican: Hair08,
} as const;

export const HATS = { crown: Hat01, hat: Hat02, bunny: Hat03 } as const;

export const MOUTHS = { kiss: Mouth01, smile: Mouth02, close: Mouth03, tongue: Mouth04 } as const;

export const NOSES = {
    small: Nose1,
    ['small-2']: Nose5,
    twist: Nose2,
    wide: Nose3,
    long: Nose4,
} as const;

export const SHIRTS = { large: Shirt1, medium: Shirt2, small: Shirt3 } as const;

export const SUNGLASSES = { small: Sunglasses01, big: Sunglasses02 } as const;

export type Beard = keyof typeof BEARDS;
export type Eyes = keyof typeof EYES;
export type Face = keyof typeof FACES;
export type Hair = keyof typeof HAIRS;
export type Hat = keyof typeof HATS;
export type Mouth = keyof typeof MOUTHS;
export type Nose = keyof typeof NOSES;
export type Shirt = keyof typeof SHIRTS;
export type Sunglasses = keyof typeof SUNGLASSES;

export type Layer = Beard | Eyes | Face | Hair | Hat | Mouth | Nose | Shirt | Sunglasses;

export const EYES_COLORS = ['#383838', '#488F54', '#5F4541', '#9AD5FF'];

export const HAIR_COLORS = [
    '#030001',
    '#5F4541',
    '#BABABA',
    '#FAE6C5',
    '#FF6624',
    '#FFBF5B',
    '#FFFFFF',
];

export const FACE_COLORS = [
    '#5F4541',
    '#6D5553',
    '#907775',
    '#AE9376',
    '#D1B9A1',
    '#D9C4AD',
    '#EBDBC9',
    '#F5E5D5',
    '#FEF4FF',
    '#FFF9F2',
];

export const SHIRT_COLORS = [
    '#030001',
    '#4866E9',
    '#48A177',
    '#A14C49',
    '#B548E9',
    '#E94895',
    '#FFE814',
    '#FFFFFF',
];

export const BACKGROUND_COLORS = [
    '#B2B0FF',
    '#C0DDEC',
    '#D8D8D8',
    '#DEFFCA',
    '#F4CFC3',
    '#FDFFA4',
    '#FFA6C4',
    '#FFFFFF',
];

export type Step = {
    options?: Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;
    colors?: string[];
    name: keyof AvatarProperties;
};

export const STEPS: Step[] = [
    {
        name: 'background',
        colors: BACKGROUND_COLORS,
    },
    {
        options: FACES,
        name: 'face',
        colors: FACE_COLORS,
    },
    {
        options: HAIRS,
        colors: HAIR_COLORS,
        name: 'hair',
    },

    {
        options: BEARDS,
        name: 'beard',
        colors: HAIR_COLORS,
    },

    {
        options: EYES,
        name: 'eyes',
        colors: EYES_COLORS,
    },
    {
        options: NOSES,
        name: 'nose',
        colors: FACE_COLORS,
    },
    {
        options: MOUTHS,
        name: 'mouth',
    },
    {
        options: SUNGLASSES,
        name: 'sunglasses',
    },
    {
        options: HATS,
        name: 'hat',
    },
    {
        options: SHIRTS,
        colors: SHIRT_COLORS,
        name: 'shirt',
    },
];
