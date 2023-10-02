import { memo, useRef, useState } from 'react';
import { Stage } from './stage/stage';
import { Controls } from './controls/controls';
import { st, classes } from './playground.st.css';

export const Playground = memo(function Playground() {
    const avatarRef = useRef<SVGSVGElement>(null);
    const [scale] = useState(1);

    function saveSVG() {
        const svg = avatarRef.current;
        if (!svg) return;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const img = new Image();
        img.onload = function () {
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const pngFile = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = 'avatar.png';
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }

    return (
        <div className={st(classes.root)}>
            <Stage avatarRef={avatarRef} />
            <Controls onSave={saveSVG} />
        </div>
    );
});
