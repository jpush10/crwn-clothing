import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray =  await getCategoriesAndDocuments();
            console.log('categoriesArray ===', categoriesArray);
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, []);
    return (
        <Routes> 
            <Route index element={<CategoriesPreview />} />
            <Route path='/:category'  element={<Category />} />
        </Routes>
    )
}

export default Shop;

// export default Shop;