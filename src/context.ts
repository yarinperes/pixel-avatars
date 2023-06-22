import { createContext } from 'react';
import {
	type Hair,
	type Hat,
	type Face,
	type Mouth,
	type Shirt,
	type Sunglasses,
	type Eyes,
	type Nose,
	type Beard,
	HAIR_COLORS,
	FACE_COLORS,
	SHIRT_COLORS,
} from './constants';

export interface AvatarProperties {
	hair: { selected?: Hair; color: string };
	hat: { selected?: Hat; color?: undefined };
	face: { selected?: Face; color: string };
	mouth: { selected?: Mouth; color?: undefined };
	shirt: { selected?: Shirt; color: string };
	sunglasses: { selected?: Sunglasses; color?: undefined };
	eyes: { selected?: Eyes; color?: undefined };
	beard: { selected?: Beard; color: string };
	nose: { selected?: Nose; color?: undefined };
	background: { selected?: string; color?: string };
}

export const DEFAULT_AVATAR: AvatarProperties = {
	hair: { selected: 'bob', color: HAIR_COLORS[0] },
	hat: { selected: 'crown' },
	face: { selected: 'sharp', color: FACE_COLORS[0] },
	mouth: { selected: 'smile' },
	shirt: { selected: 'medium', color: SHIRT_COLORS[0] },
	sunglasses: {},
	eyes: { selected: 'big' },
	nose: { selected: 'small' },
	beard: { selected: 'mustache', color: HAIR_COLORS[0] },
	background: { color: HAIR_COLORS[0] },
};

export const AvatarContext = createContext<
	{ setLayers: React.Dispatch<React.SetStateAction<AvatarProperties>> } & AvatarProperties
>({ setLayers: () => true, ...DEFAULT_AVATAR });
