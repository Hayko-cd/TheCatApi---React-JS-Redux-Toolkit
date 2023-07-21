import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuid } from "uuid";
import {CategoriesDataAction} from "store/categories/actions";
import {
    HomeSideBarBlock,
    HomeSideBarCategory,
    HomeSideBarCategoryName
} from "containers/home/styled";
import {selectCategoriesData} from "store/categories/selector";

export const HomeSideBar = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(selectCategoriesData);

    useEffect(() => {
        dispatch(CategoriesDataAction())
    }, [dispatch])

    return (
        <HomeSideBarBlock>
            {categoryData?.map((element) => (
                <HomeSideBarCategory key={uuid()}>
                    <HomeSideBarCategoryName>{element.name}</HomeSideBarCategoryName>
                </HomeSideBarCategory>
            ))}
        </HomeSideBarBlock>
    )
};
