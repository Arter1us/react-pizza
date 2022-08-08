import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCategories = (props) => (
    <ContentLoader
        speed={2}
        width={124}
        height={58}
        viewBox="0 0 124 58"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="30" ry="30" width="120" height="46" />
    </ContentLoader>
)

export default SkeletonCategories;