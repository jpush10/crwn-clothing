import { createContext, useState, useEffect,  } from "react";
import PRODUCT from '../shop-data.json';

export const ProductContext = createContext({
    products: []
});


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCT);
    const value = {products};

    useEffect(() => {
        // const unsubscribe = onAuthStateChangedListner((user) => {
        //     if (user) {
        //         createUserDocumentFromAuth(user);
        //     }
        //     setCurrentUser(user);
        //     // console.log('user ========', user);
        // });
        // return unsubscribe;
    }, []);

    return <ProductContext.Provider value={value}> {children} </ProductContext.Provider>;
}