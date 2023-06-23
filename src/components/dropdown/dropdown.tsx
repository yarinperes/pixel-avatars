import { memo, type PropsWithChildren, type ComponentType, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { st, classes } from './dropdown.st.css';

type Option = {
    value: string;
    title: string;
};

type Position = {
    top: number;
    left: number;
    width: number;
};

type OptionRenderer = ComponentType<{
    option: Option;
    className?: string;
}>;

export interface DropdownProps {
    isOpen: boolean;
    options: Option[];
    position?: Position;
    className?: string;
    optionRenderer?: OptionRenderer;
    onChange?: (option: Option) => void;
    close?: () => void;
}

export const Dropdown = memo<PropsWithChildren<DropdownProps>>(function Dropdown({
    className,
    children,
    onChange,
    position = { top: 0, left: 0, width: 0 },
    options,
    isOpen,
    optionRenderer,
    close,
}) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (isOpen) {
            const closeDropdown = (e: MouseEvent) => {
                if (!dropdownRef.current?.contains(e.target as HTMLDivElement)) {
                    close?.();
                }
            };
            document.addEventListener('click', closeDropdown);
            return () => {
                document.removeEventListener('click', closeDropdown);
            };
        }

        return;
    }, [close, isOpen]);

    return (
        <div
            ref={dropdownRef}
            className={st(classes.root, className)}
            style={{ width: `${position.width}px` }}
        >
            {children}
            {isOpen &&
                createPortal(
                    <DropdownOptions
                        onChange={onChange}
                        renderer={optionRenderer}
                        position={position}
                        options={options}
                    />,
                    document.body
                )}
        </div>
    );
});

export const DropdownOptions = memo<{
    options: Option[];
    position?: Position;
    renderer?: OptionRenderer;
    onChange?: (option: Option) => void;
}>(function DropdownOptions({
    options,
    onChange,
    position: { top, left, width } = { top: 0, left: 0, width: 0 },
    renderer: Renderer,
}) {
    return (
        <ul
            className={classes.options}
            style={{ position: 'fixed', top, left, width: `${width}px` }}
        >
            {options.map((option) =>
                Renderer ? (
                    <Renderer className={classes.option} key={option.title} option={option} />
                ) : (
                    <li
                        onClick={() => onChange?.(option)}
                        key={option.value}
                        className={classes.option}
                    >
                        {option.title}
                    </li>
                )
            )}
        </ul>
    );
});
