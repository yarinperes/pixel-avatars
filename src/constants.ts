import Beard01 from './assets/beard/beard-01.svg';
import Beard02 from './assets/beard/beard-02.svg';
import Beard03 from './assets/beard/beard-03.svg';
import Beard04 from './assets/beard/beard-04.svg';
import Beard05 from './assets/beard/beard-05.svg';

import Eyes01 from './assets/eyes/eyes-01.svg';
import Eyes02 from './assets/eyes/eyes-02.svg';
import Eyes03 from './assets/eyes/eyes-03.svg';
import Eyes04 from './assets/eyes/eyes-04.svg';

import Face01 from './assets/face/face-01.svg';
import Face02 from './assets/face/face-02.svg';
import Face03 from './assets/face/face-03.svg';

import Hair01 from './assets/hair/hair-01.svg';
import Hair02 from './assets/hair/hair-02.svg';
import Hair03 from './assets/hair/hair-03.svg';
import Hair04 from './assets/hair/hair-04.svg';
import Hair05 from './assets/hair/hair-05.svg';
import Hair06 from './assets/hair/hair-06.svg';
import Hair07 from './assets/hair/hair-07.svg';
import Hair08 from './assets/hair/hair-08.svg';

import Hat01 from './assets/hat/hat-01.svg';
import Hat02 from './assets/hat/hat-02.svg';
import Hat03 from './assets/hat/hat-03.svg';

import Mouth01 from './assets/mouth/mouth-01.svg';
import Mouth02 from './assets/mouth/mouth-02.svg';
import Mouth03 from './assets/mouth/mouth-03.svg';
import Mouth04 from './assets/mouth/mouth-04.svg';

import Nose1 from './assets/nose/nose-01.svg';
import Nose2 from './assets/nose/nose-02.svg';
import Nose3 from './assets/nose/nose-03.svg';
import Nose4 from './assets/nose/nose-04.svg';
import Nose5 from './assets/nose/nose-05.svg';

import Shirt1 from './assets/shirt/shirt-01.svg';
import Shirt2 from './assets/shirt/shirt-02.svg';
import Shirt3 from './assets/shirt/shirt-03.svg';

import Sunglasses01 from './assets/sunglasses/sunglasses-01.svg';
import Sunglasses02 from './assets/sunglasses/sunglasses-02.svg';

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
