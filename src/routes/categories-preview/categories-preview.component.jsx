// import './categories-preview.styles.scss';
import { Fragment, useContext} from "react";
import { useSelector } from "react-redux";
import { selectCategoryMap, selectCategoryIsLoading } from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";
// import { CategoriesContext } from "../../contexts/categories.contexts";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoryMap);
    const isLoading = useSelector(selectCategoryIsLoading);
    console.log(categoriesMap);
    // const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment >
            {
                isLoading ? (Spinner) : (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        )
                    })
                )
            }
        </Fragment>
    )
}

export default CategoriesPreview;

// export default Shop;