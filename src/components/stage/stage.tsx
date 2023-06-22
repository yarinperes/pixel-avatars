import { Avatar } from '../avatar/avatar';
import { st, classes } from './stage.st.css';

export const Stage = () => {
	return (
		<div className={st(classes.root)}>
			<Avatar />
			{/* <input className={classes.scale} type="range" /> */}
		</div>
	);
};
