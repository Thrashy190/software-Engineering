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


export const createCourse = async (collectionName, document) => {
    const modules = [
        {
            name: 'module 1',
            lessons: [
                {
                    name: 'lesson 1',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
                {
                    name: 'lesson 2',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
                {
                    name: 'lesson 3',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
            ]
        },
        {
            name: 'module 2',
            lessons: [
                {
                    name: 'lesson 1',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
                {
                    name: 'lesson 2',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
                {
                    name: 'lesson 3',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
            ]
        },
        {
            name: 'module 3',
            lessons: [
                {
                    name: 'lesson 1',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
                {
                    name: 'lesson 2',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
                {
                    name: 'lesson 3',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=7YcW25PHnAA'
                },
            ]
        },
    ]

    const courseRef = collection(db, collectionName);
    const documentCourseRef = await addDoc(courseRef, document);

    for (const module of modules) {
        const moduleRef = collection(db, `${collectionName}/${documentCourseRef.id}/modules`);
        const documentmoduleRef = await addDoc(moduleRef, { name: module.name });
        for (const lesson of module.lessons) {
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

export const getCollectionWhere = async (
    collectionName,
    field,
    operator,
    value
) => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(field, operator, value));
    const collectionSnapshot = await getDocs(q);
    const collectionData = collectionSnapshot.docs.map((doc) => doc.data());
    return collectionData;
};

export const getCollectionWhereOrder = async (
    collectionName,
    field,
    operator,
    value,
    orderField,
    order
) => {
    const collectionRef = collection(db, collectionName);
    const q = query(
        collectionRef,
        where(field, operator, value),
        orderBy(orderField, order)
    );
    const collectionSnapshot = await getDocs(q);
    const collectionData = collectionSnapshot.docs.map((doc) => doc.data());
    return collectionData;
};

export const getDocumentWhere = async (
    collectionName,
    field,
    operator,
    value
) => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(field, operator, value));
    const collectionSnapshot = await getDocs(q);
    const collectionData = collectionSnapshot.docs.map((doc) => doc.data());
    return collectionData;
};

export const getDocumentWhereOrder = async (
    collectionName,
    field,
    operator,
    value,
    orderField,
    order
) => {
    const collectionRef = collection(db, collectionName);
    const q = query(
        collectionRef,
        where(field, operator, value),
        orderBy(orderField, order)
    );
    const collectionSnapshot = await getDocs(q);
    const collectionData = collectionSnapshot.docs.map((doc) => doc.data());
    return collectionData;
};
