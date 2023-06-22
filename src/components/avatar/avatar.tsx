import { memo, useContext } from 'react';
import { st, classes } from './avatar.st.css';
import {
	BEARDS,
	FACES,
	type Beard,
	type Eyes,
	type Face,
	type Hair,
	type Hat,
	type Mouth,
	type Nose,
	type Shirt,
	type Sunglasses,
	SHIRTS,
	MOUTHS,
	NOSES,
	HAIRS,
	EYES,
	SUNGLASSES,
	HATS,
} from '../../constants';
import { AvatarContext, type AvatarProperties } from '../../context';

interface AvatarProps {
	className?: string;
}

export const Avatar = memo<AvatarProps>(function Avatar({ className }) {
	const { eyes, face, hair, hat, mouth, nose, shirt, sunglasses, beard } =
		useContext(AvatarContext);

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
		<div className={st(classes.root, className)}>
			{Shirt && <Shirt className={classes.layer} style={{ color: shirt.color }} />}
			{Face && <Face className={classes.layer} style={{ color: face.color }} />}
			{Hair && <Hair className={classes.layer} style={{ color: hair.color }} />}
			{Beard && <Beard className={classes.layer} style={{ color: beard.color }} />}
			{Mouth && <Mouth className={classes.layer} />}
			{Eyes && <Eyes className={classes.layer} />}
			{Nose && <Nose className={classes.layer} />}
			{Hat && <Hat className={classes.layer} />}
			{Sunglasses && <Sunglasses className={classes.layer} />}
		</div>
	);
});
