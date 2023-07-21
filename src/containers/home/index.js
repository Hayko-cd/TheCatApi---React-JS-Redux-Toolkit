import {
    HomeElementEveryBlock,
    HomeElementWrapper,
    HomeSideBarBlock,
    HomeSideBarCategory,
    HomeSideBarCategoryName,
    HomeWrapper
} from "containers/home/styled";

export const Home = () => {
    return (
        <HomeWrapper>
            <HomeSideBarBlock>
                <HomeSideBarCategory>
                    <HomeSideBarCategoryName>Test</HomeSideBarCategoryName>
                </HomeSideBarCategory>
                <HomeSideBarCategory>
                    <HomeSideBarCategoryName>Test</HomeSideBarCategoryName>
                </HomeSideBarCategory>
                <HomeSideBarCategory>
                    <HomeSideBarCategoryName>Test</HomeSideBarCategoryName>
                </HomeSideBarCategory>
                <HomeSideBarCategory>
                    <HomeSideBarCategoryName>Test</HomeSideBarCategoryName>
                </HomeSideBarCategory>
                <HomeSideBarCategory>
                    <HomeSideBarCategoryName>Test</HomeSideBarCategoryName>
                </HomeSideBarCategory>
                <HomeSideBarCategory>
                    <HomeSideBarCategoryName>Test</HomeSideBarCategoryName>
                </HomeSideBarCategory>
            </HomeSideBarBlock>
            <HomeElementWrapper>
                <HomeElementEveryBlock></HomeElementEveryBlock>
                <HomeElementEveryBlock></HomeElementEveryBlock>
                <HomeElementEveryBlock></HomeElementEveryBlock>
                <HomeElementEveryBlock></HomeElementEveryBlock>
                <HomeElementEveryBlock></HomeElementEveryBlock>
            </HomeElementWrapper>
        </HomeWrapper>
    )
}
