export const Nose05 = ({ color = 'currentColor' }: { color?: string }) => (
    <>
        <mask
            id="mask0_4_1333"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="52"
            y="65"
            width="16"
            height="5"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52 65H57V70H52V65ZM63 65H68V70H63V65Z"
                fill={color}
            />
        </mask>
        <g mask="url(#mask0_4_1333)">
            <rect x="38" y="51" width="44" height="37" fill={color} />
        </g>
    </>
);
export default Nose05;
