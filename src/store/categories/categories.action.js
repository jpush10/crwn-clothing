import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categoriesArray) =>  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);


export const fetchCategoriesStart = () => {
    console.log('fetchCategoriesStart');
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);
}

export const fetchCategoriesFailed = (error) => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
}


export const fetchCategoriesStartAsync = () =>  {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart);
        try {
            const categoriesArray =  await getCategoriesAndDocuments('categories');
            console.log('categoriesArray ===', categoriesArray);
            dispatch(fetchCategoriesSuccess(categoriesArray));
        } catch (error) {
            console.log('error fetchCategories ===', error);
            dispatch(fetchCategoriesFailed(error));
        }
    };
}