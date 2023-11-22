//firebase firestore functions to get docs, set docs, update docs, delect docs with where and order optionals

import { db } from "./firebase";
import {
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
