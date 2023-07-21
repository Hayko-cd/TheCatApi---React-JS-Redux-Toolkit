import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuid } from "uuid";
import {useNavigate} from "react-router-dom";
import {ROUTENAMES} from "routes/routes";
import {CategoriesDataAction} from "store/categories/actions";
import {selectCategoriesData} from "store/categories/selector";
import {
    HomeSideBarBlock,
    HomeSideBarCategory,
    HomeSideBarCategoryName
} from "containers/home/styled";


export const HomeSideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categoryData = useSelector(selectCategoriesData);

    const handleChangeCategory = (categoryId) => {
        navigate(`${ROUTENAMES.home}category/${categoryId}`)
    };

    useEffect(() => {
        dispatch(CategoriesDataAction())
    }, [dispatch]);

    return (
        <HomeSideBarBlock>
            {categoryData?.map((element) => (
                <HomeSideBarCategory key={uuid()} onClick={() => handleChangeCategory(element.id)}>
                    <HomeSideBarCategoryName>{element.name}</HomeSideBarCategoryName>
                </HomeSideBarCategory>
            ))}
        </HomeSideBarBlock>
    )
};
