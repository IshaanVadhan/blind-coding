// import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnApRHY_clS7aEp2Mt2GQOk9MAlQWTsIY",
  authDomain: "blind-coding-738ae.firebaseapp.com",
  projectId: "blind-coding-738ae",
  storageBucket: "blind-coding-738ae.appspot.com",
  messagingSenderId: "330423786000",
  appId: "1:330423786000:web:1174135dde167c3788c895",
  measurementId: "G-ZXNTREQNRN"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const storage = firebase.storage;
const storageRef = firebase.storage().ref();
const credentialsGenerator = (email, password) => {
  return firebase.auth.EmailAuthProvider.credential(email,password);
}  
const firestore = firebase.firestore();
const createUserDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }
  // console.log(additionalData)
  const userRef = firestore.doc(`result/${user?.id}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {email} = user;
    const {code, slotID, passed, lang} = additionalData;
    
    try {
      userRef.set({
        code,
        email,
        slotID,
        passed,
        lang,
        createdAt: new Date(),
      })
    }
    catch (err) {
      console.log(err.message)
    }
    // return "Code submitted successfully!";
  }
  else {
    // return "You have already made a submission!";
  }
}

// const updateDocument = async (username, updateData) => {
//   if (!username) {
//     return;
//   }
//   const user = firestore.collection("users").doc(username);
//   return user.update(updateData);
// }

const getUserDocument = async (user) => {
  //console.log("user in firebase: ", user?.email)
  firestore.collection("users")
  .where("email", "==", user?.email)
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log("docdata firebase",doc.data())
        return (doc.data());
      })
  })
  .catch((error) => {
      alert(error);
  });
}

export { auth, firestore, storage, storageRef, createUserDocument, getUserDocument, credentialsGenerator }; // app, 