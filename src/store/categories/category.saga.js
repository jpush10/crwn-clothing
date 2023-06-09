import { takeLatest, call, put, all } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesStart, fetchCategoriesFailed, fetchCategoriesSuccess } from "./categories.action";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";

// export const fetchCategoriesStartAsync = () =>  {
//     return async (dispatch) => {
//         dispatch(fetchCategoriesStart);
//     };
// }

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync); 
}

export function* categorySaga() {
    yield all([call(onFetchCategories)]);
}