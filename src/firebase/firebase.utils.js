import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import * as COLLECTION_IDS from './collections.ids';

/* ================================================================ */
/*  Initializing Firebase Process                                   */
/* ================================================================ */

/* Development Firebase Project */
const devConfig = {
	apiKey: process.env.REACT_APP_DEV_API_KEY,
	authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
	projectId: process.env.REACT_APP_DEV_PROJECT_ID,
	storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_DEV_APP_ID,
	measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID,
};

/* Production Firebase Project */
const prodConfig = {
	apiKey: process.env.REACT_APP_PROD_API_KEY,
	authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
	projectId: process.env.REACT_APP_PROD_PROJECT_ID,
	storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_PROD_APP_ID,
	measurementId: process.env.REACT_APP_PROD_MEASUREMENT_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

firebase.initializeApp(config);

/* ================================================================ */
/*  Firebase Actions                                                */
/* ================================================================ */

/* Create Functions */
export const createUserProfileDocument = async (userAuth, otherData) => {
	if (!userAuth) return console.error('Please provide all the inputs');

	const userRef = firestore.doc(`${COLLECTION_IDS.USERS}/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date().toISOString();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...otherData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
};

export const createCollectionAndDocuments = async (collectionId, documents) => {
	if (!collectionId || !documents)
		return console.error('Please provide all the inputs');

	const collectionRef = firestore.collection(collectionId);
	const batch = firestore.batch();

	documents.forEach(doc => {
		const newDocumentRef = collectionRef.doc();

		batch.set(newDocumentRef, { id: newDocumentRef.id, ...doc });
	});

	return await batch.commit();
};

/* Update Functions */
export const updateDocument = async (collectionId, documentId, data) => {
	if (!collectionId || !documentId)
		return console.error('Please provide all the inputs');

	await firestore.collection(collectionId).doc(documentId).set(data);
};

export const updateItemsQuantity = async (collectionId, documents) => {
	if (!collectionId || !documents)
		return console.error('Please provide all the inputs');

	const batch = firestore.batch();
	documents.forEach(doc => {
		const documentRef = firestore.collection(collectionId).doc(doc.id);
		const decrement = firebase.firestore.FieldValue.increment(
			-doc.quantity
		);

		batch.update(documentRef, { quantity: decrement });
	});

	return await batch.commit();
};

/* Get Functions */
export const getDataFromRef = async collectionRef => {
	const snapshot = await collectionRef.get();
	const data = snapshot.docs.map(doc => {
		return { id: doc.id, ...doc.data() };
	});

	return data;
};

export const getDocument = async (collectionId, documentId) => {
	if (!collectionId || !documentId)
		console.error('Please provide all the inputs');

	const documentRef = firestore.doc(`${collectionId}/${documentId}`);
	const snapshot = await documentRef.get();
	const data = snapshot.data();

	return data;
};

export const getCollection = async collectionId => {
	if (!collectionId) return console.error('There is no "collectionId"');

	const collectionRef = firestore.collection(collectionId);

	return collectionRef;
};

export const getCollectionOrderedByDate = async collectionId => {
	if (!collectionId) return console.error('There is no "collectionId"');

	const collectionRef = firestore
		.collection(collectionId)
		.orderBy('createdAt', 'desc');

	return collectionRef;
};

/* Delete Functions */
export const deleteDocuments = async (collectionId, documents) => {
	if (!collectionId || !documents)
		return console.error('Please provide all the inputs');

	const batch = firestore.batch();
	documents.forEach(doc => {
		const documentRef = firestore.collection(collectionId).doc(doc);

		batch.delete(documentRef);
	});

	return await batch.commit();
};

/* ================================================================ */
/*  Firestore & Auth                                                */
/* ================================================================ */

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* ================================================================ */
/*  Firebase Auth Providers                                         */
/* ================================================================ */

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signOutFromGoogle = () => auth.signOut();

/* ================================================================ */
/*  Export Default                                         			*/
/* ================================================================ */

export default firebase;
