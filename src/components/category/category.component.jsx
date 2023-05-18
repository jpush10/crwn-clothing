import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.contexts';
import ProductCard from '../product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
    const {category} = useParams();
    console.log(category);
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log('categoriesMap ==', categoriesMap);
    const [ products, setProducts] = useState(categoriesMap[category]);
    console.log('products.length =========', products);
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <Fragment>
            <h2 className='category-title'>
                {category.toUpperCase()}
            </h2>
            <div className='category-preview-container'>
                <div className='preview'>
                {
                    products && 
                    products.map((product) => (<ProductCard key={product.id} product={product} />))
                }
                </div>
            </div>
        </Fragment>
    )
}

export default Category;