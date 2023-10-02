export const Nose01 = ({ color = 'currentColor' }: { color?: string }) => (
    <>
        <mask
            id="mask0_4_1333"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="55"
            y="55"
            width="10"
            height="15"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55 55H60V60V65H65V70H60H55V65V60V55Z"
                fill={color}
            />
        </mask>
        <g mask="url(#mask0_4_1333)">
            <rect x="38" y="46" width="44" height="37" fill={color} />
        </g>
    </>
);
export default Nose01;
