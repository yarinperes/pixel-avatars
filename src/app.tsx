import type React from 'react';
import { useMemo } from 'react';
import { st, classes } from './app.st.css';
import { AvatarContext, DEFAULT_AVATAR } from './components/playground/context';
import { useState } from 'react';
import { Hero } from './components/hero/hero';
import { Info } from './components/info/info';
import { Playground } from './components/playground/playground';
import { Footer } from './components/footer/footer';
import { Gallery } from './components/playground/gallery/gallery';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    const [layers, setLayers] = useState(DEFAULT_AVATAR);

    return (
        <AvatarContext.Provider value={useMemo(() => ({ ...layers, setLayers }), [layers])}>
            <div className={st(classes.root, className)}>
                <Hero />
                <Playground />
                <Gallery />
                <Info />
                <Footer />
            </div>
        </AvatarContext.Provider>
    );
};
