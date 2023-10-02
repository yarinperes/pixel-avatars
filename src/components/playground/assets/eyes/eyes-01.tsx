export const Eyes01 = ({ color = 'currentColor' }: { color?: string }) => (
    <>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44 55H48V60H44V55ZM62 55H66V60H62V55ZM57 55H53V60H57V55ZM71 55H75V60H71V55Z"
            fill="white"
        />
        <rect width="5" height="5" transform="translate(48 55)" fill={color} />
        <rect width="5" height="5" transform="translate(66 55)" fill={color} />
    </>
);
export default Eyes01;
