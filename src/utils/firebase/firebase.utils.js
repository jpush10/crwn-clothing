// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
        createUserWithEmailAndPassword ,
        GoogleAuthProvider,
        signInWithEmailAndPassword, 
        signOut,
        onAuthStateChanged
     } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAg2jiim8vb209U16BRm8X6UaGdiVIHpqM",
  authDomain: "crwn-clothing-db-80c54.firebaseapp.com",
  projectId: "crwn-clothing-db-80c54",
  storageBucket: "crwn-clothing-db-80c54.appspot.com",
  messagingSenderId: "764026247524",
  appId: "1:764026247524:web:943792d9d150f3853e0271"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = await collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = await collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
    
    // .reduce((acc, dosSnapshot) => {
    //     const { title, items } = dosSnapshot.data();
    //     acc[title.toLowerCase()] = items;
    //     return acc;
    // }, {});
    // return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.error('Error while cretaing the user',err.message)
        }
    }
    return userSnapshot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () =>  {
    return await signOut(auth)
};

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        console.log('auth ======', auth);
        const unsubscribe = onAuthStateChanged(
            auth, 
            (userAuth) => {
                console.log('userAuth =======', userAuth);
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
    });
};