// import './categories-preview.styles.scss';
import { Fragment, useContext} from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";
// import { CategoriesContext } from "../../contexts/categories.contexts";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategories);
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