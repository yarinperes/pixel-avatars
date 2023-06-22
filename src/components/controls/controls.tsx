import { memo, useContext } from 'react';
import { st, classes } from './controls.st.css';
import { AvatarContext, type AvatarProperties } from '../../context';
import {
	BEARDS,
	EYES,
	FACES,
	FACE_COLORS,
	HAIRS,
	HAIR_COLORS,
	HATS,
	MOUTHS,
	NOSES,
	SHIRTS,
	SHIRT_COLORS,
	SUNGLASSES,
} from '../../constants';
import Select from 'react-select';

export const Controls = memo(function Controls() {
	return (
		<div className={st(classes.root)}>
			<Control colors={SHIRT_COLORS} name="shirt" layer={SHIRTS} />
			<Control colors={FACE_COLORS} name="face" layer={FACES} />
			<Control colors={HAIR_COLORS} name="hair" layer={HAIRS} />
			<Control colors={HAIR_COLORS} name="beard" layer={BEARDS} />
			<Control name="mouth" layer={MOUTHS} />
			<Control name="eyes" layer={EYES} />
			<Control name="nose" layer={NOSES} />
			<Control name="hat" layer={HATS} />
			<Control name="sunglasses" layer={SUNGLASSES} />
		</div>
	);
});

function Control<T extends object>({
	name,
	colors,
	layer,
}: {
	name: keyof AvatarProperties;
	colors?: string[];
	layer: T;
}) {
	const { setLayers, ...state } = useContext(AvatarContext);

	return (
		<div className={st(classes.control)}>
			<label>{name}</label>
			<Select
				className={classes.type}
				value={{ label: state[name].selected, value: state[name].selected }}
				onChange={(e) => {
					setLayers((prev) => ({
						...prev,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						[name]: {
							color: prev[name].color,
							selected: e.value,
						},
					}));
				}}
				options={[
					{ value: 'None', label: 'None' },
					...Object.keys(layer).map((key) => ({
						label: key,
						value: key,
					})),
				]}
			/>
			{colors && (
				<Select
					className={classes.color}
					value={{ label: state[name].color, value: state[name].color }}
					onChange={(e) => {
						setLayers((prev) => ({
							...prev,
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							[name]: {
								color: prev[name].color,
								selected: e.value,
							},
						}));
					}}
					options={colors?.map((key) => ({
						label: key,
						value: key,
					}))}
				/>
			)}

			{/* <label>{name}</label> */}
			{/*
			<select
				className={classes.type}
				value={state[name].selected}
				onChange={(e) => {
					setLayers((prev) => ({
						...prev,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						[name]: {
							color: prev[name].color,
							selected: e.target.value,
						},
					}));
				}}
			>
				<option className={classes.layer} key="none" value="none">
					None
				</option>
				{Object.keys(layer).map((key) => (
					<option className={classes.layer} key={key} value={key}>
						{key}
					</option>
				))}
			</select>
			{colors && (
				<select
					className={classes.color}
					// value={}
					onChange={(e) => {
						setLayers((prev) => ({
							...prev,
							[name]: {
								// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
								selected: prev[name].selected,
								color: e.target.value,
							},
						}));
					}}
				>
					{colors?.map((color) => (
						<option className={classes.layer} key={color} value={color}>
							{color}
						</option>
					))}
				</select>
			)} */}
		</div>
	);
}
