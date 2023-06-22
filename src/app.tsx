import type React from 'react';
import { useMemo } from 'react';
import { st, classes } from './app.st.css';
import { Stage } from './components/stage/stage';
import { Controls } from './components/controls/controls';
import { AvatarContext, DEFAULT_AVATAR } from './context';
import { useState } from 'react';

export interface AppProps {
	className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
	const [layers, setLayers] = useState(DEFAULT_AVATAR);

	return (
		<AvatarContext.Provider value={useMemo(() => ({ ...layers, setLayers }), [layers])}>
			<main className={st(classes.root, className)}>
				<div className={classes.stage}>
					<Stage />
				</div>
				<div className={classes.controls}>
					<Controls />
				</div>
			</main>
		</AvatarContext.Provider>
	);
};
