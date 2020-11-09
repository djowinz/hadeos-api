import admin from 'firebase-admin';
admin.initializeApp({
    credential: admin.credential.cert('./sa-key.json'),
    databaseURL: "https://buttonmus-prime.firebaseio.com"

});
export default admin.firestore();