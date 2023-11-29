//firebase firestore functions to get docs, set docs, update docs, delect docs with where and order optionals

import { db } from "./firebase";
import {
    setDoc,
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    getDoc,
} from "firebase/firestore";

export const getCollection = async (collectionName) => {
    const collectionData = [];
    const collectionRef = collection(db, collectionName);
    const collectionSnapshot = await getDocs(collectionRef);
    collectionSnapshot.forEach((doc) => {
        collectionData.push({ ...doc.data(), id: doc.id });
    });
    return collectionData;
};

export const getDocument = async (collectionName, documentId) => {
    const documentRef = doc(db, collectionName, documentId);
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
        const documentData = documentSnapshot.data();
        return documentData;
    }
    else {
        console.log('No such document!');
    }
};


export const createCourse = async (collectionName, document, modules) => {


    const courseRef = collection(db, collectionName);
    const documentCourseRef = await addDoc(courseRef, document);

    for (const module of modules) {
        const moduleRef = collection(db, `${collectionName}/${documentCourseRef.id}/modules`);
        const documentmoduleRef = await addDoc(moduleRef, { name: module.name });
        for (const lesson of module.leccion) {
            const lessonRef = collection(db, `${collectionName}/${documentCourseRef.id}/modules/${documentmoduleRef.id}/lessons`);
            const documentlessonRef = await addDoc(lessonRef, lesson);
            console.log(documentlessonRef)
        }
    }
}


export const addDocument = async (collectionName, document) => {
    const collectionRef = collection(db, collectionName);
    const documentRef = await addDoc(collectionRef, document);
    return documentRef;
};

export const updateDocument = async (collectionName, documentId, document) => {
    const documentRef = doc(db, collectionName, documentId);
    const documentUpdated = await updateDoc(documentRef, document);
    return documentUpdated;
};

export const deleteDocument = async (collectionName, documentId) => {
    const documentRef = doc(db, collectionName, documentId);
    const documentDeleted = await deleteDoc(documentRef);
    return documentDeleted;
};

export const getCollectionWithSubcollections = async (collectionName) => {
    const collectionData = [];
    const collectionRef = collection(db, collectionName);
    const collectionSnapshot = await getDocs(collectionRef);

    for (const doc of collectionSnapshot.docs) {
        const docData = doc.data();
        const modulosCollectionRef = collection(doc.ref, 'modulos');
        const modulosSnapshot = await getDocs(modulosCollectionRef);

        const modulosData = [];

        for (const moduloDoc of modulosSnapshot.docs) {
            const moduloData = moduloDoc.data();
            const leccionesCollectionRef = collection(moduloDoc.ref, 'lecciones');
            const leccionesSnapshot = await getDocs(leccionesCollectionRef);

            const leccionesData = leccionesSnapshot.docs.map(leccionDoc => ({
                ...leccionDoc.data(),
                id: leccionDoc.id
            }));

            modulosData.push({
                ...moduloData,
                id: moduloDoc.id,
                lecciones: leccionesData
            });
        }

        collectionData.push({
            ...docData,
            id: doc.id,
            modulos: modulosData
        });
    }

    return collectionData;
};

export const updateDocumentWithSubcollections = async (collectionName, documentId, document) => {
    const documentRef = doc(db, collectionName, documentId);
    await updateDoc(documentRef, document);

    // Manejar la actualización de subcolecciones, por ejemplo, "modulos" y "lecciones"
    if (document.modulos) {
        for (const modulo of document.modulos) {
            const moduloRef = collection(documentRef, 'modulos', modulo.id);
            await updateDoc(moduloRef, modulo);

            if (modulo.lecciones) {
                for (const leccion of modulo.lecciones) {
                    const leccionRef = collection(moduloRef, 'lecciones', leccion.id);
                    await updateDoc(leccionRef, leccion);
                }
            }
        }
    }

    return true; // o cualquier otro valor que desees devolver
};
