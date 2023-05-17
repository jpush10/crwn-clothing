import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.contexts';
import ProductCard from '../product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
    const {category} = useParams();
    console.log(category);
    const { categoriesMap } = useContext(CategoriesContext);
    console.log('categoriesMap ==', categoriesMap);
    const [ products, setProducts] = useState(categoriesMap[category]);
    console.log('products.length =========', products);
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <div className='category-container' >
            {
                products && 
                products.map((product) => (<ProductCard key={product.id} product={product} />))
            }
        </div>
    )
}

export default Category;