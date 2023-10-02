import { useContext, useRef, useState } from 'react';
import { Dropdown } from '../../../dropdown/dropdown';
import { type AvatarProperties, AvatarContext } from '../../context';
import { Chevron } from '../chevron';
import { st, classes } from './control.st.css';

export function Control<T extends object>({
    name,
    colors,
    layer,
    next,
    previous,
}: {
    name: keyof AvatarProperties;
    colors?: string[];
    layer?: T;
    next: () => void;
    previous: () => void;
}) {
    const { setLayers, ...state } = useContext(AvatarContext);
    const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);
    const [isColorOpen, setIsColorOpen] = useState<boolean>(false);

    const typeRef = useRef<HTMLDivElement>(null);
    const colorRef = useRef<HTMLDivElement>(null);
    const typeRect = typeRef.current?.getBoundingClientRect();
    const colorRect = colorRef.current?.getBoundingClientRect();

    const typeOptions = layer && getOptions(layer);

    const typePosition = typeRect && {
        left: typeRect.left,
        top: typeRect.top + typeRect.height + 12,
        width: typeRect.width,
    };

    const colorPosition = colorRect && {
        left: colorRect.left,
        top: colorRect.top + colorRect.height + 12,
        width: colorRect.width,
    };

    const colorOptions =
        colors?.map((key) => ({
            title: key,
            value: key,
        })) || [];

    const onTypeChange = (option: { value: string; title: string }): void => {
        setLayers((prev) => ({
            ...prev,
            [name]: {
                selected: option.value,
                color: prev[name].color,
            },
        }));
    };

    const onColorChange = (option: { value: string; title: string }): void => {
        setLayers((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                color: option.value,
            },
        }));
    };

    return (
        <div className={st(classes.root)}>
            <div className={classes.title}>
                <Chevron className={classes.chevron} onClick={previous} />
                <span>{name}</span>
                <Chevron className={classes.chevron} onClick={next} direction="right" />
            </div>
            <div className={classes.dropdowns}>
                {typeOptions && (
                    <div className={classes.dropdownContainer} ref={typeRef}>
                        <Dropdown
                            close={() => setIsTypeOpen(false)}
                            isOpen={isTypeOpen}
                            options={typeOptions}
                            onChange={onTypeChange}
                            position={typePosition}
                        >
                            <button
                                onClick={() => setIsTypeOpen(!isTypeOpen)}
                                className={classes.opener}
                            >
                                {state[name].selected || 'Type'}
                            </button>
                        </Dropdown>
                    </div>
                )}
                {colors && (
                    <div className={classes.dropdownContainer} ref={colorRef}>
                        <Dropdown
                            close={() => setIsColorOpen(false)}
                            isOpen={isColorOpen}
                            options={colorOptions}
                            position={colorPosition}
                            optionRenderer={({ option, className }) => (
                                <li
                                    className={className}
                                    onClick={() => onColorChange(option)}
                                    style={{ background: option.value }}
                                />
                            )}
                        >
                            <button
                                onClick={() => setIsColorOpen(!isColorOpen)}
                                className={classes.opener}
                                style={{
                                    background: state[name].color,
                                    color: getTextColorByBackground(state[name].color || ''),
                                }}
                            >
                                Color
                            </button>
                        </Dropdown>
                    </div>
                )}
            </div>
        </div>
    );
}

function getOptions<T extends object>(layer: T) {
    const options = [{ value: 'None', title: 'None' }];

    for (const key in layer) {
        options.push({
            value: key,
            title: key,
        });
    }

    return options;
}

function getTextColorByBackground(hexBackground: string) {
    const rgbBackground = hexToRgb(hexBackground);
    const luminance =
        (0.299 * rgbBackground.r + 0.587 * rgbBackground.g + 0.114 * rgbBackground.b) / 255;
    return luminance > 0.5 ? '#000' : '#fff';
}

function hexToRgb(hex: string) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}
