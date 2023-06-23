import type { SVGAttributes } from 'react';

export const Chevron = ({
    direction = 'left',
    ...props
}: {
    direction?: 'left' | 'right';
} & SVGAttributes<SVGElement>) => (
    <svg
        width="9"
        style={{ transform: direction === 'right' ? 'rotate(180deg)' : '' }}
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M8 13.5L2 7.5L8 1.5" stroke="black" strokeWidth="2" />
    </svg>
);
