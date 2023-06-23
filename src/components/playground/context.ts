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
    BACKGROUND_COLORS,
    EYES_COLORS,
} from './constants';

export interface AvatarProperties {
    hair: { selected?: Hair; color?: string };
    hat: { selected?: Hat; color?: string };
    face: { selected?: Face; color?: string };
    mouth: { selected?: Mouth; color?: string };
    shirt: { selected?: Shirt; color?: string };
    sunglasses: { selected?: Sunglasses; color?: string };
    eyes: { selected?: Eyes; color?: string };
    beard: { selected?: Beard; color?: string };
    nose: { selected?: Nose; color?: string };
    background: { color?: string; selected?: string };
}

export const DEFAULT_AVATAR: AvatarProperties = {
    hair: { color: HAIR_COLORS[0] },
    hat: {},
    face: { color: FACE_COLORS[0] },
    mouth: {},
    shirt: { color: SHIRT_COLORS[0] },
    sunglasses: {},
    eyes: { color: EYES_COLORS[0] },
    nose: { color: FACE_COLORS[0] },
    beard: { color: HAIR_COLORS[0] },
    background: { color: BACKGROUND_COLORS[0] },
};

export const AvatarContext = createContext<
    { setLayers: React.Dispatch<React.SetStateAction<AvatarProperties>> } & AvatarProperties
>({ setLayers: () => true, ...DEFAULT_AVATAR });
