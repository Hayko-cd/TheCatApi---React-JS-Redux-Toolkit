import {HomeElementEveryBlock, HomeElementWrapper} from "containers/home/styled";
import {useDispatch} from "react-redux";

export const HomeElements = () => {
    const dispatch = useDispatch();

    return (
        <HomeElementWrapper>
            <HomeElementEveryBlock></HomeElementEveryBlock>
            <HomeElementEveryBlock></HomeElementEveryBlock>
            <HomeElementEveryBlock></HomeElementEveryBlock>
            <HomeElementEveryBlock></HomeElementEveryBlock>
            <HomeElementEveryBlock></HomeElementEveryBlock>
        </HomeElementWrapper>
    )
}