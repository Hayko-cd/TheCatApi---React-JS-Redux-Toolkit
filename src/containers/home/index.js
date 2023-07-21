import {HomeSideBar} from "components/home/homeSideBar";
import {HomeElements} from "components/home/homeElements";
import {
    HomeWrapper
} from "containers/home/styled";

export const Home = () => {

    return (
        <HomeWrapper>
            <HomeSideBar />
            <HomeElements />
        </HomeWrapper>
    )
}
