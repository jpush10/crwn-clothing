// import './categories-preview.styles.scss';
import { Fragment, useContext} from "react";
import { useSelector } from "react-redux";
import { selectCategoryMap } from "../../store/categories/categories.selector";
// import { CategoriesContext } from "../../contexts/categories.contexts";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoryMap);
    console.log(categoriesMap);
    // const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment >
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;

// export default Shop;