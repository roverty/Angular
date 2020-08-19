import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://krishwait-3933a.firebaseio.com"
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

const app = express();
app.use(cors({ origin: true }));

app.get('/getProducts', async (req: any, res: any) => {
	const productsRef = db.collection('products');
	const productsSnap = await productsRef.get();
	const products = productsSnap.docs.map(doc => doc.data());

	res.json(
		products
	);
});

app.get('/getProduct', async (req: any, res: any) => {
	const id = req.query.idProduct || 0;
	const productRef = db.collection('products');
	const productSnap = await productRef.get();
	const productId = productSnap.docs.find(product => product.id === id);

	let product;

	if (!productId) {
		res.status(400).json({
			error: true,
			message: 'Invalid ID ' + id
		});
	} else {
		product = productId.data();
	}


	res.json(
		product
	);
});

export const api = functions.https.onRequest(app);