import ContentLoader from "react-content-loader";

const PizzaListSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={459}
        viewBox="0 0 280 459"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="135" cy="125" r="125" />
        <rect x="0" y="280" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="320" rx="3" ry="3" width="280" height="80" />
        <rect x="0" y="425" rx="0" ry="0" width="86" height="35" />
        <rect x="124" y="425" rx="0" ry="0" width="155" height="35" />
    </ContentLoader>
);

export default PizzaListSkeleton;
