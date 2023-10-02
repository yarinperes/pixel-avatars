export const Eyes02 = ({ color = 'currentColor' }: { color?: string }) => (
    <>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 50H69H74V55H69V60H64V55V50ZM51 55V60H46V55V50H51H56V55H51Z"
            fill="white"
        />
        <rect width="5" height="5" transform="translate(51 55)" fill={color} />
        <rect width="5" height="5" transform="translate(69 55)" fill={color} />
    </>
);
export default Eyes02;
