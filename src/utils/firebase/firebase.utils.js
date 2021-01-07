import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD0t0p_x2kCQrDcddndYcVxZZwGVdyG8MQ",
  authDomain: "crwn-clothing-e93a4.firebaseapp.com",
  databaseURL: "https://crwn-clothing-e93a4.firebaseio.com",
  projectId: "crwn-clothing-e93a4",
  storageBucket: "crwn-clothing-e93a4.appspot.com",
  messagingSenderId: "847126168089",
  appId: "1:847126168089:web:8e2055bde8d2aea7a86088",
  measurementId: "G-QBRKGPD4LE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocDB = async (userAuth, additionalData) => {
  // if no user dont create any document!!
  if (!userAuth) return;

  // check if the user already exist
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnap = await userRef.get();

  // console.log(userRef, userSnap);

  // if not then create new user
  if (!userSnap.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("user not created", error);
    }
  }

  return userRef;
};

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// USER AUTHENTICATED SESSION PERSISTENCE
