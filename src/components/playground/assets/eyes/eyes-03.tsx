export const Eyes03 = ({ color = 'currentColor' }: { color?: string }) => (
    <>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41 50H46H51H56V60H51H46H41V50ZM64 50H69H74H79V60H74H69H64V50Z"
            fill="white"
        />
        <rect width="5" height="5" transform="translate(51 53)" fill={color} />
        <rect width="5" height="5" transform="translate(64 55)" fill={color} />
    </>
);
export default Eyes03;
