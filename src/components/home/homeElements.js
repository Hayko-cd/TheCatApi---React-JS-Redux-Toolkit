import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuid} from "uuid";
import {useParams} from "react-router-dom";
import {CatsDataAction} from "store/cats/actions";
import {resetData} from "store/cats/slice";
import {selectCatsData} from "store/cats/selector";
import {
    HomeElementEveryBlock,
    HomeElementEveryImage,
    HomeElementWrapper,
    LoadMoreButton,
    LoadMoreButtonWrapper
} from "containers/home/styled";

export const HomeElements = () => {
    const [activePages, setActivePages] = useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();
    const catData = useSelector(selectCatsData);

    const handleLoadMore = () => {
        setActivePages((prevState) => prevState + 1)
    }

    useEffect(() => {
        dispatch(CatsDataAction({
            id: id && id,
            page: activePages
        }))
    }, [dispatch, id, activePages]);

    useEffect(() => {
        dispatch(resetData());
    }, [id])

    return (
        <HomeElementWrapper>
            {catData.map((element) => (
                <HomeElementEveryBlock key={uuid()}>
                    <HomeElementEveryImage src={element.url} alt="Image will be loaded soon sorry"/>
                </HomeElementEveryBlock>
            ))}
            <LoadMoreButtonWrapper>
                <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
            </LoadMoreButtonWrapper>
        </HomeElementWrapper>
    )
}
